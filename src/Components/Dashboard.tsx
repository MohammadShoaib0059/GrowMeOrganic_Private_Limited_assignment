
import { Box, Typography } from '@mui/material'
import FakeData from './FakeData'
import NestedList_Customer_department from './NestedList_Customer_department'
import NestedList_Design_department from './NestedList_Design_department'

const Dashboard = () => {
  return (
    <div>
      <FakeData/>
      <Typography sx={{paddingTop:"20px"}}>Nested Department Listing</Typography>
      <Box sx={{display:'flex'}}>
      <NestedList_Customer_department/>
    <NestedList_Design_department/>
      </Box>
  
    </div>
  )
}

export default Dashboard
