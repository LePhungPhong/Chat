// === FILE: src/utils/time.ts ===

import { formatDistanceToNow, format } from 'date-fns';
import { vi } from 'date-fns/locale';

export function formatLastSeen(dateStr?: string | Date | null, isOnline?: boolean): string {
    if (isOnline) return "Đang hoạt động";
    if (!dateStr) return "Ngoại tuyến";

    const date = new Date(dateStr);
    const diff = Date.now() - date.getTime();

    // Nếu < 2 phút coi như vừa truy cập
    if (diff < 2 * 60 * 1000) return "Vừa truy cập";

    return "Hoạt động " + formatDistanceToNow(date, { addSuffix: true, locale: vi });
}

export function formatMessageTime(dateStr: string) {
    const date = new Date(dateStr);
    return format(date, 'HH:mm');
}