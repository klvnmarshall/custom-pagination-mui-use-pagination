"use client";
import { Stack, Typography } from "@mui/material";
import { AppPagination, PaginationOptions } from "@/components/Pagination";
import React, { useState } from "react";

export default function Home() {
  const [options, setOptions] = useState<PaginationOptions>({
    page: 1,
    size: 10,
    totalPages: 30,
  });

  const handlePagination = (paginationOptions: PaginationOptions) => {
    console.log(paginationOptions);
    setOptions(paginationOptions);
  };

  return (
    <Stack>
      <Stack padding={2}>
        <Typography variant="h4" gutterBottom>
          Page {options.page}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Size {options.size}
        </Typography>
      </Stack>

      {/*<CustomPagination options={options} handlePagination={handlePagination} />

      {!loading && (
        <CustomPagination
          options={options}
          handlePagination={handlePagination}
        />
      )}*/}

      <AppPagination
        options={options}
        handlePagination={handlePagination}
      ></AppPagination>
    </Stack>
  );
}
