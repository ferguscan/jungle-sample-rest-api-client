/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryModelWithRelations } from '../models/InventoryModelWithRelations';
import type { PageInfo } from '../models/PageInfo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InventoryService {

    /**
     * @param authorization Auth header of the form: "ApiKey YOUR_TOKEN"
     * @param from Start from this cursor
     * @param limit Maximum number of items to retrieve
     * @param locationId Retrieve inventory for this location
     * @returns any Retrieve a list of inventory records
     * @throws ApiError
     */
    public static inventoryFind(
        authorization?: string,
        from?: string,
        limit?: number,
        locationId?: string,
    ): CancelablePromise<{
        results?: Array<InventoryModelWithRelations>;
        pageInfo?: PageInfo;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/inventory',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'from': from,
                'limit': limit,
                'locationId': locationId,
            },
        });
    }

}
