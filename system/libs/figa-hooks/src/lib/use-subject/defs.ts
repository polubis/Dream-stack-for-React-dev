import type { Observable } from 'rxjs';

interface SubjectConfig<T> {
  delay?: number;
  cb(data: T): void;
}

interface SubjectReturn<T> {
  emit(data: T): void;
  $: Observable<T>;
}

export type { SubjectConfig, SubjectReturn };
