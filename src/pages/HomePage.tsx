import { Grid } from "@mui/material"
import DefaultCard from "../shared/ui/DefaultCard"

export default function HomePage(){
    const test = [
        {boxname: 'title1', description: 'content1',},
        {boxname: 'title2', description: 'content2',},
        {boxname: 'title3', description: 'content3',},
        {boxname: 'title4', description: 'content4',}
    ]

    return (
        <Grid container spacing={2} direction='row'>
            {test.map((item) => (
                <Grid>
                    <DefaultCard boxname={item.boxname} description={item.description}/>
                </Grid>
            ))}
        </Grid>
    )
}