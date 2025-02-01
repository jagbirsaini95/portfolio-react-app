import { Typography, } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Work, School } from "@mui/icons-material";
import { experienceTimeline } from "../assets/constants";

const JSTimeline = () => {
    return (
        <Timeline position="alternate" sx={{ mt: 2 }}>
            {experienceTimeline.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot color="primary">{item.icon === 'work' ? <Work /> : <School />}</TimelineDot>
                        {index !== experienceTimeline.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" color="primary">
                            {item.year}
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {item.description}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
};

export default JSTimeline;
