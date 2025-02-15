import { Typography, } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, timelineItemClasses } from "@mui/lab";
import { Work, School } from "@mui/icons-material";
import { experienceTimeline } from "../assets/constants";

const JSTimeline = () => {
    return (
        <Timeline sx={{ mt: 2, [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0, }, }}>
            {experienceTimeline.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">{item.icon === 'work' ? <Work /> : <School />}</TimelineDot>
                        {index !== experienceTimeline.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" color="secondary">
                            {item.year}
                        </Typography>
                        <Typography variant="subtitle2" fontWeight="bold" >
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
