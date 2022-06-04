import {
  faArrowUpRightFromSquare,
  faBookOpen,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";

const ProjectCard = ({ card }: any) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      key={card.id}
      component={Paper}
      elevation={6}
      className="my-6 sm:my-0"
    >
      <CardHeader
        avatar={<Avatar alt={card.creator} src={card.icon} />}
        action={
          <IconButton aria-label="settings">
            <FontAwesomeIcon icon={faBookOpen} />
          </IconButton>
        }
        title={card.creator}
        subheader={card.date}
      />
      <CardMedia
        component="img"
        height="100"
        image={card.image}
        alt={card.entreprise}
      />
      <CardContent>
        <Typography variant="body2" color="secondary.main">
          {card.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FontAwesomeIcon icon={faHeart} />
        </IconButton>
        <Typography variant="body2" color="secondary.main">
          {card.entreprise}
        </Typography>
        <Link href={card.link}>
          <Button sx={{ flexGrow: 1, justifyContent: "flex-end" }}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
