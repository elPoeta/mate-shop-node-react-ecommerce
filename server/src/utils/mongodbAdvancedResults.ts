import { Request } from "express";
import mongoose from "mongoose";

type PaginationStatus = {
  page: number,
  limit: number,
}

type Pagination = {
  next?: PaginationStatus,
  prev?: PaginationStatus,
}

export interface AdvancedResultsResponse {
  success: boolean;
  count: number;
  pagination: Pagination;
  data: mongoose.Document<unknown, any, unknown>[];
}

interface QueryReq {
  select?: string,
  sort?: string,
  page?: string,
  limit?: string,
}

export const mongodbAdvancedResults = async (modelType: string, req: Request, populate: string | undefined): Promise<AdvancedResultsResponse> => {
  let query;
  const model = mongoose.model(modelType);
  const reqQuery = { ...req.query };
  const queryReq = req.query as QueryReq;
  const removeFields = ['select', 'sort', 'page', 'limit'];

  removeFields.forEach(param => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

  query = model.find(JSON.parse(queryStr));

  if (queryReq.select) {
    const fields = queryReq.select.split(',').join(' ');
    query = query.select(fields);
  }

  if (queryReq.sort) {
    const sortBy = queryReq.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  const page = queryReq.page ? parseInt(queryReq.page, 10) : 1;
  const limit = queryReq.limit ? parseInt(queryReq.limit, 10) : 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();

  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  const results = await query;

  const pagination: Pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  return {
    success: true,
    count: results.length,
    pagination,
    data: results
  };

};