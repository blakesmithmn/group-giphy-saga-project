import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// MUI IMPORTS
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FavoritesItem({ fave }) {


    return (
        <Card>
            <CardContent>
                <img src={fave.url} />
                {/* // CAT COMPONENT */}
                <Button variant='outlined'>Change</Button>
            </CardContent>
        </Card>
    )
}