/**
 * Middleware for propagating the Lamdis interaction instance ID
 * via the X-Lamdis-Instance-Id header.
 *
 * Works with Express, Fastify, and compatible HTTP frameworks.
 */
/**
 * Extract the Lamdis instance ID from an incoming request's headers.
 */
export declare function extractInstanceId(headers: Record<string, string | string[] | undefined>): string | undefined;
/**
 * Create headers object with the instance ID for outgoing requests.
 */
export declare function propagationHeaders(instanceId: string): Record<string, string>;
/**
 * Express-compatible middleware that extracts X-Lamdis-Instance-Id
 * from incoming requests and attaches it to req.lamdisInstanceId.
 */
export declare function expressMiddleware(): (req: any, _res: any, next: any) => void;
/**
 * Fastify plugin that extracts X-Lamdis-Instance-Id from incoming
 * requests and decorates the request object.
 */
export declare function fastifyPlugin(fastify: any, _opts: any, done: any): void;
//# sourceMappingURL=middleware.d.ts.map