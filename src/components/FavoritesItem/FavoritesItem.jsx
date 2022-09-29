import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// MUI IMPORTS
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CategoryDisplay from "../CategoryDisplay/CategoryDisplay";

export default function FavoritesItem({ fave }) {


    return (
        <Card>
            <CardContent>
                <img src={fave.url} />
                <CategoryDisplay categoryName={fave.name} favoriteId={fave.id}/>
            </CardContent>
        </Card>
    )
}