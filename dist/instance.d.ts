import type { EmitOptions, WorkflowHandle, Environment } from './types.js';
import type { EventClient } from './client.js';
/**
 * Represents a single workflow instance.
 * Created by Lamdis.startWorkflow().
 */
export declare class WorkflowInstance implements WorkflowHandle {
    readonly id: string;
    private seq;
    private completed;
    private readonly client;
    private readonly workflowKey;
    private readonly environment;
    private readonly source;
    constructor(client: EventClient, workflowKey: string, environment: Environment, source?: string, existingId?: string);
    /**
     * Emit an evidence event for this workflow instance.
     */
    emit(eventType: string, payload: Record<string, unknown>, options?: EmitOptions): Promise<void>;
    /**
     * Mark the workflow as complete and flush remaining events.
     */
    complete(): Promise<void>;
}
//# sourceMappingURL=instance.d.ts.map