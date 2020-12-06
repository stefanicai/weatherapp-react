import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing('1%', '5%')
        },
        section: {
            padding: theme.spacing('1%', 0)
        }
    })
)