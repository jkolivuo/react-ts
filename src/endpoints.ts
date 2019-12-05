// @flow
import React from 'react';

const base: string = "http://localhost:3001";

const urls = {
    TODOS: {
        GET: () => `${base}/todos`,
        SHOW: (id: string) => `${base}/todos/${id}`,
        PUT: (id: string) => `${base}/todos/${id}`,
        POST: () => `${base}/todos`,
    }
}

export default urls;