type ExtractData<T> = T extends { data?: infer D } ? NonNullable<D> : never;
type ExtractError<T> = T extends { error?: infer E } ? E : never;

export async function requestWrapper<
    P extends Promise<{ data?: unknown; error?: unknown }>
>(promise: P): Promise<ExtractData<Awaited<P>>> {
    const res = await promise as Awaited<P>;

    if ((res as { error?: unknown }).error) {
        throw (res as ExtractError<Awaited<P>>);
    }

    return (res as { data: unknown }).data as ExtractData<Awaited<P>>;
}
