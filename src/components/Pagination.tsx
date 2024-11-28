"use client";
import { Box, Button, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import usePagination from "@mui/material/usePagination";

export type PaginationOptions = {
  page: number;
  size: number;
  totalPages: number;
};

interface PaginationProps {
  options: PaginationOptions;
  handlePagination: (options: PaginationOptions) => void;
}

export const AppPagination = (props: PaginationProps) => {
  const { options, handlePagination } = props;
  const { items } = usePagination({
    siblingCount: 0,
    boundaryCount: 2,
    count: options.totalPages,
    onChange: (_, page) => {
      handlePagination({ ...options, page });
    },
  });

  const next = items.find(({ type }) => type === "next");
  const previous = items.find(({ type }) => type === "previous");

  const pages = items.filter(
    ({ type }) =>
      type === "page" || type === "start-ellipsis" || type === "end-ellipsis",
  );

  return (
    <Box
      padding={2}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Button
        {...previous}
        startIcon={<ArrowBackIcon />}
        variant="outlined"
        type="button"
        sx={{
          border: "1px solid  #D0D5DD",
          color: "#344054",
          ".&:hover": {
            border: "1px solid  #D0D5DD",
          },
          fontWeight: 500,
        }}
      >
        {previous?.type}
      </Button>

      <Stack flexDirection={"row"}>
        {pages.map(({ page, type, selected, ...item }, index) => {
          if (type === "start-ellipsis" || type === "end-ellipsis") {
            return <Button key={index}>...</Button>;
          } else {
            return (
              <Button
                {...item}
                variant="outlined"
                key={index}
                sx={{
                  border: "none",
                  color: selected ? "#2A3339" : "#667085",
                  px: "0px",
                  background: selected ? "#F0F3F3" : "transparent",
                  "&:hover": {
                    border: "none",
                    boxShadow: "none",
                    background: "#667085",
                  },
                  fontWeight: "400",
                  fontSize: "14px",
                  marginRight: "3px",
                }}
              >
                {page}
              </Button>
            );
          }
        })}
      </Stack>

      <Button
        {...next}
        endIcon={<ArrowForwardIcon />}
        variant="outlined"
        type="button"
        sx={{
          border: "1px solid  #D0D5DD",
          color: "#344054",
          ".&:hover": {
            border: "1px solid  #D0D5DD",
          },
          fontWeight: 500,
        }}
      >
        {next?.type}
      </Button>
    </Box>
  );
};
