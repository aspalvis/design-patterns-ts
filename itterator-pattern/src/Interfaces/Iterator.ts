export interface IIterator {
  hasNext(): boolean;
  current(): string;
  next(): void;
}
