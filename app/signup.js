import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MyButton from '../components/navigation/MyButton';

export default function Signup() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [isAgency, setIsAgency] = useState(null);

  const [focus, setFocus] = useState({
    name: false,
    number: false,
    email: false,
    password: false,
    company: false,
  });

  const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field, value) =>
    setFocus((prev) => ({ ...prev, [field]: value.trim() !== '' }));

  return (
    <View style={{ flex: 1, backgroundColor: '#F3F4F6', paddingHorizontal: 24, paddingVertical: 40 }}>
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', width: '80%' }}>
          Create your PopX Account
        </Text>
      </View>

      <View style={{ gap: 10 }}>
        {[
          { id: 'name', label: 'Full Name', value: name, setValue: setName },
          { id: 'number', label: 'Phone Number', value: number, setValue: setNumber, keyboardType: 'phone-pad' },
          { id: 'email', label: 'Email Address', value: email, setValue: setEmail, keyboardType: 'email-address' },
          { id: 'password', label: 'Password', value: password, setValue: setPassword, secureTextEntry: true },
          { id: 'company', label: 'Company Name', value: company, setValue: setCompany },
        ].map(({ id, label, value, setValue, ...props }) => (
          <View key={id} style={{ position: 'relative', marginVertical: 8, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, paddingHorizontal: 12, backgroundColor: 'white', paddingTop: 14, paddingBottom: 8 }}>
            {focus[id] || value ? (
              <Text style={{ position: 'absolute', top: 5, left: 12, fontSize: 12, color: '#7B3FF6', paddingHorizontal: 2 }}>
                {label}
              </Text>
            ) : null}
            <TextInput
              onFocus={() => handleFocus(id)}
              onBlur={(e) => handleBlur(id, e.nativeEvent.text || '')}
              placeholder={!focus[id] ? label : ''}
              style={{ fontSize: 16, paddingVertical: 6 }}
              value={value}
              onChangeText={setValue}
              {...props}
            />
          </View>
        ))}
      </View>

      {/* Radio Button Section */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>
          Are you an Agency?
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
          <TouchableOpacity onPress={() => setIsAgency(true)} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: isAgency === true ? '#7B3FF6' : '#D1D5DB',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {isAgency === true && <View style={{ width: 10, height: 10, backgroundColor: '#7B3FF6', borderRadius: 5 }} />}
            </View>
            <Text style={{ marginLeft: 8 }}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsAgency(false)} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: isAgency === false ? '#7B3FF6' : '#D1D5DB',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {isAgency === false && <View style={{ width: 10, height: 10, backgroundColor: '#7B3FF6', borderRadius: 5 }} />}
            </View>
            <Text style={{ marginLeft: 8 }}>No</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', marginTop: 20 }}>
        <MyButton title="Create Account" color="#7B3FF6" onPress={() => {}} />
      </View>
    </View>
  );
}
