import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function TareaCard({ tarea, borrarTarea }) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
        <Card sx={{ width: 500, marginBottom: 2, marginTop: 2 }}>
            <CardContent>
            <Typography variant="h5" component="div">
                {tarea.titulo}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Inicio: {tarea.fecha_inicio} - Fin: {tarea.fecha_fin}
            </Typography>
            <Typography variant="body2">
                {tarea.descripcion}
            </Typography>
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Estado: {tarea.estado}
            </Typography>
            <Button variant="contained" sx={{ mr: 2 }} onClick={() => borrarTarea(tarea.id)}>Eliminar</Button>
            <Button variant="contained">Marcar la wea como terminada XD</Button>
            </CardContent>
        </Card>
        </Box>
    );
}

export default TareaCard;
