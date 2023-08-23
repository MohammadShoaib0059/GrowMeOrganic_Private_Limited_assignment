import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fakeDataContract } from "../Contracts/FakeDataContract";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 110 },
  {
    field: "title",
    headerName: "Title",
    width: 360,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 400,
  },
];

export default function DataGridDemo(props: fakeDataContract) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
