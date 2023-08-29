import { useTheme  , Box, Typography} from "@mui/material";
import  Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import  AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMoreRounded } from "@mui/icons-material";
import {tokens} from '../../theme';
import Header from "../../components/Header";

const FAQ = () => {
     const theme=useTheme();
     const colors = tokens(theme.palette.mode);
    return (
        <Box m="30px">
        <Header title="FAQ" subtitle="popular Question"/>
            <Accordion  >
                <AccordionSummary 
                 expandIcon={<ExpandMoreRounded/>}>
                    <Typography color={colors.greenAccent[400]} variant="h3"> 
                    Track Your Package
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography color={colors.greenAccent[300]} variant="h5" > 
                        Go to Your Orders.
                        Go to the order you want to track.
                        Select Track Package next to your order.
                        Select See all updates to view delivery updates.
                        Depending on the shipping method you chose, it's possible that the tracking information might not be visible immediately.
                        </Typography>
                    </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded >
                <AccordionSummary 
                 expandIcon={<ExpandMoreRounded/>}>
                    <Typography color={colors.greenAccent[400]} variant="h3"> 
                    Find a Missing Item from Your Package
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography color={colors.greenAccent[300]} variant="h5" > 
                        If you received your package and an item is missing, do the following:
                        Go to Your Orders to see if your missing item is in another shipment.
                        Next to the image of your item, select Track Package to find the delivery date for this shipment.
                        If you still can't locate your item, contact us.
                        </Typography>
                    </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded >
                <AccordionSummary 
                 expandIcon={<ExpandMoreRounded/>}>
                    <Typography color={colors.greenAccent[400]} variant="h3"> 
                    Find a Missing Package That Shows as Delivered
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography color={colors.greenAccent[300]} variant="h5" > 
                        If your tracking information shows that your package was delivered, but you can't find it:
                        Verify the shipping address in Your Orders.
                        Look for a notice of attempted delivery.
                        Look around the delivery location for your package.
                        See if someone else accepted the delivery, unless you have health or safety concerns about doing so.
                        Check your mailbox or wherever else you receive mail. Some packages travel through multiple carriers.
                        Wait 48 hours. In rare cases, packages may say delivered up to 48 hours before arrival.
                        If you haven't received your package, contact us within 30 days of expected delivery. We'll do everything we can to help.
                        </Typography>
                    </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded >
                <AccordionSummary 
                 expandIcon={<ExpandMoreRounded/>}>
                    <Typography color={colors.greenAccent[400]} variant="h3"> 
                    Carrier Contact Information
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography color={colors.greenAccent[300]} variant="h5" > 
                        Important: Some national carriers use regional carriers to deliver your package. When this happens, your tracking information may not be accurately reflected on the national carrier website.
                        We ship some exceptionally large or heavy items by a specialty carrier such as CEVA, Pilot, or XPO. We use Parcel Pool for standard deliveries to Alaska and Hawaii, and OnTrac for same-day deliveries to Seattle.
                        </Typography>
                    </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded >
                <AccordionSummary 
                 expandIcon={<ExpandMoreRounded/>}>
                    <Typography color={colors.greenAccent[400]} variant="h3"> 
                    Tracking Doesn't Match Carrier's Website    
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography color={colors.greenAccent[300]} variant="h5" > 
                        You may see slight differences in the tracking information listed in Your Account and the details on a carrier's website. Every carrier uses their own language to indicate shipment statuses. We simplify the updates in Your Account to make them easier to understand.
                        </Typography>
                    </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
