import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import { Student } from '../../../interfaces/Students';
import { useTheme } from '../../../context/ThemeContext';
import { useFeed } from '../../../context/FeedContext';
import { FontAwesome } from '@expo/vector-icons';  // Importación de iconos de Expo
import { useStudentsApi } from '../../../hooks/useStudentsApi';
import { Styles } from '../../../../Styles';
interface Props {
  student: Student;
}

export const Students: React.FC = () => {
  const { isLoading, listStudents, deleteStudent, createStudent } = useStudentsApi();
  const { theme } = useTheme();
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const { changeFeed } = useFeed();

  const handleDelete = (student: Student) => {
    Alert.alert("Confirmación", "¿Estás seguro de que deseas eliminar este estudiante?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Eliminar", onPress: () => deleteStudent(student) }
    ]);
  };

  const handleEdit = (student: Student) => {
    setEditingStudent(student);
  };

  const renderStudentCard = ({ item }: { item: Student }) => (
    <View
    style={[
      Styles.card,
      item.status === 'Baja'
        ? Styles.cardred
        : Styles.cardgreen
    ]}
  >
       <View style={Styles.cardIcons}>
        <FontAwesome name={item.status === 'Baja' ? 'angle-down' : item.status === 'Egresado' ? 'angle-up' : 'circle'} color={item.status === 'Baja' ? 'red' : item.status === 'Egresado' ? 'green' : 'green'} />
        {item.gender==='Masculino'?<FontAwesome name="male"  /> : <FontAwesome name="female"  />}
        <FontAwesome name="home"  />
      </View>
      <View style={Styles.cardHeaderGreen}>
        <Text style={[Styles.cardTitle, theme === 0 ? Styles.lightText : Styles.darkText]}>
          {item.name} {'\n'} {item.lastname} {'\n'} {item.age}
        </Text>
     
           

       
      </View>
      

 
      <View style={Styles.cardIcons}>
      {(() => {
    switch (item.drug) {
      case 'Cannabis':
        return <FontAwesome name="leaf" size={24} color="#6B8E23" title="Cannabis" />;
      case 'Alcohol':
        return <FontAwesome name="beer" size={24} color="#8B0000" title="Alcohol" />;
      case 'Metanfetamina':
        return <FontAwesome name="cube" size={24} color="#4682B4" title="Metanfetamina" />;
      case 'Heroína':
        return <FontAwesome name="medkit" size={24} color="#B22222" title="Heroína" />;
      case 'Cocaína':
        return <FontAwesome name="snowflake-o" size={24} color="#A9A9A9" title="Cocaína" />;
      case 'Anfetaminas':
        return <FontAwesome name='flask' size={24} color="#4B0082" title="Anfetaminas" />;
      default:
        return <FontAwesome name="question" size={24} color="#555" title="Desconocido" />;
    }
  })()}
        {item.gender==='Masculino'?<FontAwesome name="male"  /> : <FontAwesome name="female"  />}
        <FontAwesome name="home"  />
      </View>
   

      <View style={Styles.cardActions}>
       
      <TouchableOpacity>

                  <FontAwesome name='edit'  />
                </TouchableOpacity>

        <TouchableOpacity onPress={() => handleDelete(item)}>
          <FontAwesome name="trash"  />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Usuarios</Text>
      <TouchableOpacity onPress={() => changeFeed(1)} style={Styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="#333" />
      </TouchableOpacity>

      {isLoading ? (
        <Text>Cargando...</Text>
      ) : (
<FlatList
  data={listStudents}
  renderItem={renderStudentCard}
  keyExtractor={(item) => item._id}  // Ajuste de keyExtractor
  numColumns={2}
  columnWrapperStyle={Styles.row}
/>

      )}
    </View>
  );
};

