import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography, MenuItem } from '@mui/material';

const AgregarTareaModal = ({ open, handleClose, agregarTarea }) => {
    const initialTareaState = {
        titulo: '',
        fecha_inicio: '',
        fecha_fin: '',
        descripcion: '',
        estado: 'pendiente'
    };

    const [tarea, setTarea] = useState(initialTareaState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTarea({
        ...tarea,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarTarea(tarea);
        setTarea(initialTareaState); // Resetear el formulario
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            }}
        >
            <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
            Agregar Nueva Tarea
            </Typography>
            <TextField
            name="titulo"
            label="Título"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={handleChange}
            value={tarea.titulo}
            />
            <TextField
            name="fecha_inicio"
            label="Fecha de Inicio"
            type="date"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={handleChange}
            value={tarea.fecha_inicio}
            InputLabelProps={{
                shrink: true,
            }}
            />
            <TextField
            name="fecha_fin"
            label="Fecha de Fin"
            type="date"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={handleChange}
            value={tarea.fecha_fin}
            InputLabelProps={{
                shrink: true,
            }}
            />
            <TextField
            name="descripcion"
            label="Descripción"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={handleChange}
            value={tarea.descripcion}
            />
            <TextField
            name="estado"
            label="Estado"
            select
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={handleChange}
            value={tarea.estado}
            >
            <MenuItem value="pendiente">Pendiente</MenuItem>
            <MenuItem value="en_proceso">En Proceso</MenuItem>
            <MenuItem value="finalizado">Finalizado</MenuItem>
            </TextField>
            <Button type="submit" variant="contained" fullWidth>
            Agregar
            </Button>
        </Box>
        </Modal>
    );
};

export default AgregarTareaModal;
