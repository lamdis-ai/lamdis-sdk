import { uuidv7 } from './uuidv7.js';
/**
 * Represents a single workflow instance.
 * Created by Lamdis.startWorkflow().
 */
export class WorkflowInstance {
    id;
    seq = 0;
    completed = false;
    client;
    workflowKey;
    environment;
    source;
    constructor(client, workflowKey, environment, source) {
        this.id = uuidv7();
        this.client = client;
        this.workflowKey = workflowKey;
        this.environment = environment;
        this.source = source ?? 'sdk';
    }
    /**
     * Emit an evidence event for this workflow instance.
     */
    async emit(eventType, payload, options) {
        if (this.completed) {
            throw new Error(`Workflow instance ${this.id} is already completed`);
        }
        this.seq++;
        const event = {
            workflowInstanceId: this.id,
            eventType,
            payload,
            confirmationLevel: options?.level,
            emittedAt: new Date().toISOString(),
            idempotencyKey: options?.idempotencyKey ?? `${this.id}:${eventType}:${this.seq}`,
            sequenceNumber: this.seq,
            source: this.source,
            metadata: {
                ...options?.metadata,
                workflowKey: this.workflowKey,
                environment: this.environment,
            },
        };
        await this.client.enqueue(event);
    }
    /**
     * Mark the workflow as complete and flush remaining events.
     */
    async complete() {
        if (this.completed)
            return;
        await this.emit('workflow.completed', {
            workflowKey: this.workflowKey,
        }, { level: 'E' });
        this.completed = true;
        await this.client.flush();
    }
}
//# sourceMappingURL=instance.js.map