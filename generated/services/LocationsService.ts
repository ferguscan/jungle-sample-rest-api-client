/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationModelWithRelations } from '../models/LocationModelWithRelations';
import type { PageInfo } from '../models/PageInfo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LocationsService {

    /**
     * @param authorization Auth header of the form: "ApiKey YOUR_TOKEN"
     * @param from Start from this cursor
     * @param limit Maximum number of items to retrieve
     * @param capabilities
     * @returns any Retrieve a list of locations
     * @throws ApiError
     */
    public static locationsFind(
        authorization?: string,
        from?: string,
        limit?: number,
        capabilities?: Array<string>,
    ): CancelablePromise<{
        results?: Array<LocationModelWithRelations>;
        pageInfo?: PageInfo;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'from': from,
                'limit': limit,
                'capabilities': capabilities,
            },
        });
    }

}
