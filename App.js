import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Picker } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [datosRegistrados, setDatosRegistrados] = useState(null); 

  const handleRegistro = () => {
    const datos = {
      nombre,
      apellido,
      correoElectronico,
      contrasena,
      confirmarContrasena,
      numeroTelefono,
      fechaNacimiento,
      genero,
      aceptarTerminos
    };
    setDatosRegistrados(datos); 
    console.log('Información del formulario:', datos);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuarios</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={text => setApellido(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={correoElectronico}
        onChangeText={text => setCorreoElectronico(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={text => setContrasena(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Confirmar Contraseña"
        value={confirmarContrasena}
        onChangeText={text => setConfirmarContrasena(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Número de Teléfono"
        value={numeroTelefono}
        onChangeText={text => setNumeroTelefono(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={fechaNacimiento}
        onChangeText={text => setFechaNacimiento(text)}
      />
      <Picker
        selectedValue={genero}
        style={styles.input}
        onValueChange={itemValue => setGenero(itemValue)}>
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Femenino" value="Femenino" />
        <Picker.Item label="Otro" value="Otro" />
      </Picker>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={aceptarTerminos}
          onValueChange={setAceptarTerminos}
        />
        <Text>Aceptar términos y condiciones</Text>
      </View>
      <Button
        title="Registrar"
        onPress={handleRegistro}
      />

      {datosRegistrados && ( 
        <View style={styles.datosRegistradosContainer}>
          <Text style={styles.title}>Datos Registrados:</Text>
          <Text>{`Nombre: ${datosRegistrados.nombre}`}</Text>
          <Text>{`Apellido: ${datosRegistrados.apellido}`}</Text>
          <Text>{`Correo Electrónico: ${datosRegistrados.correoElectronico}`}</Text>
          <Text>{`Número de Teléfono: ${datosRegistrados.numeroTelefono}`}</Text>
          <Text>{`Fecha de Nacimiento: ${datosRegistrados.fechaNacimiento}`}</Text>
          <Text>{`Género: ${datosRegistrados.genero}`}</Text>
          <Text>{`Aceptó términos y condiciones: ${datosRegistrados.aceptarTerminos ? 'Sí' : 'No'}`}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 300,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  datosRegistradosContainer: {
    marginTop: 20,
  },
});