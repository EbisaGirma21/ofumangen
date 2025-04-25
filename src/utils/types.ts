// types.ts
export interface ModelInterface<T> {
  find: () => Promise<T[]>;
  create: (data: Partial<T>) => Promise<T>;
}
