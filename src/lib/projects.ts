export const projects = ['ya-fullstack', 'niic', 'ya-randoms', 'dachsapp'] as const;
export type Project = (typeof projects)[number];
