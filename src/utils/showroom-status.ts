import { useSyncExternalStore } from "react";
import { WEEKLY_SCHEDULE, DaySchedule } from "@/data/jewellery-data";

export interface ShowroomStatusResult {
  isOpen: boolean;
  badgeText: string;
  subText: string;
  currentDayName: string;
  currentDayIndex: number;
  todaySchedule: DaySchedule;
  isThursday: boolean;
}

export function getShowroomStatus(): ShowroomStatusResult {
  // Convert current time to Indian Standard Time (IST: UTC + 5:30)
  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utcTime + istOffset);

  const dayIndex = istDate.getDay(); // 0 is Sunday, 4 is Thursday
  const currentMinutes = istDate.getHours() * 60 + istDate.getMinutes();

  const daySchedule =
    WEEKLY_SCHEDULE.find((s) => s.dayIndex === dayIndex) || WEEKLY_SCHEDULE[0];
  const isThursday = dayIndex === 4;

  if (isThursday || !daySchedule.isOpen) {
    return {
      isOpen: false,
      badgeText: "Closed Today (Thursday)",
      subText: "Opens Friday at 10:00 AM IST",
      currentDayName: daySchedule.day,
      currentDayIndex: dayIndex,
      todaySchedule: daySchedule,
      isThursday: true,
    };
  }

  // Check if within 10:00 AM to 7:00 PM
  const openMin = daySchedule.openMinutes; // 600 (10:00 AM)
  const closeMin = daySchedule.closeMinutes; // 1140 (7:00 PM)

  if (currentMinutes >= openMin && currentMinutes < closeMin) {
    return {
      isOpen: true,
      badgeText: "Open Now",
      subText: "Visiting hours until 7:00 PM IST today",
      currentDayName: daySchedule.day,
      currentDayIndex: dayIndex,
      todaySchedule: daySchedule,
      isThursday: false,
    };
  } else if (currentMinutes < openMin) {
    return {
      isOpen: false,
      badgeText: "Closed Now",
      subText: "Opens today at 10:00 AM IST",
      currentDayName: daySchedule.day,
      currentDayIndex: dayIndex,
      todaySchedule: daySchedule,
      isThursday: false,
    };
  } else {
    // After 7:00 PM
    const nextDayIndex = (dayIndex + 1) % 7;
    const isNextDayThursday = nextDayIndex === 4;
    return {
      isOpen: false,
      badgeText: "Closed for the Day",
      subText: isNextDayThursday
        ? "Tomorrow is Thursday (Showroom Closed) • Reopens Friday 10:00 AM"
        : "Reopens tomorrow at 10:00 AM IST",
      currentDayName: daySchedule.day,
      currentDayIndex: dayIndex,
      todaySchedule: daySchedule,
      isThursday: false,
    };
  }
}

// React 19 external store integration
const listeners = new Set<() => void>();
let cachedStatus: ShowroomStatusResult = getShowroomStatus();

if (typeof window !== "undefined") {
  setInterval(() => {
    cachedStatus = getShowroomStatus();
    listeners.forEach((listener) => listener());
  }, 60000);
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

export function useShowroomStatus(): ShowroomStatusResult | null {
  return useSyncExternalStore(
    subscribe,
    () => cachedStatus,
    () => null
  );
}
