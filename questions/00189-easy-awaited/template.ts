type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer K> ?
  K extends PromiseLike<infer P> ? Awaited<P> : K : never
