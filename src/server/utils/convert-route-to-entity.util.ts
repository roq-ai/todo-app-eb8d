const mapping: Record<string, string> = {
  businesses: 'business',
  reminders: 'reminder',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
