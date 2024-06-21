import React, { useEffect, useState } from 'react';
import TareaCard from './components/TareaCard';
import Button from '@mui/material/Button';
import NavBar from './components/NavBar';
import Box from '@mui/material/Box';
import AgregarTareaModal from './components/AgregarTareaModal';
import axios from 'axios';

function App() {
  const [tareas, setTareas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios.get(`${apiUrl}/api/tareas`)
      .then(response => {
        console.log('Success:', response.data);
        setTareas(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const agregarTarea = (nuevaTarea) => {
    const apiUrl = process.env.REACT_APP_API_URL;

    axios.post(`${apiUrl}/api/tareas`, nuevaTarea)
      .then(response => {
        console.log('Tarea agregada:', response.data);
        // Asegúrate de que estás agregando el objeto de tarea correcto al estado
        setTareas([...tareas, response.data]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const borrarTarea = (id) => {
    const apiUrl = process.env.REACT_APP_API_URL;

    axios.delete(`${apiUrl}/api/tareas/${id}`)
      .then(response => {
        console.log('Tarea eliminada:', response.data);
        setTareas(tareas.filter(tarea => tarea.id !== id));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <NavBar />
      <Box display="flex" justifyContent="center" alignItems="center">
        <h1>Mis tareas</h1>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button variant="contained" onClick={handleOpen}>Agregar nueva tarea</Button>
      </Box>

      <AgregarTareaModal open={modalOpen} handleClose={handleClose} agregarTarea={agregarTarea} />

      <div className="tareas-container">
        {tareas.map((tarea) => (
          <div key={tarea.id}>
            <TareaCard tarea={tarea} borrarTarea={borrarTarea} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
