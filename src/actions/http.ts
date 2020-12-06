/**
 * Adds typescript to fetch API
 */
export async function http<T>(request: RequestInfo, init: RequestInit = {}): Promise<T> {
    const response = await fetch(request, init)
    if (!response.ok) {
        throw new Error("Failed with " + response.statusText)
    }
    return await response.json()
}