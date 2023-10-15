import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';


const Title = ({ title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.titleView}>
                <HeaderTitle numberOfLines={2}>
                    {title}
                </HeaderTitle>
                <SearchButton onPress={() => {}}>
                    {/* Substitua SearchIcon pelo seu componente de ícone */}
                    {/* <SearchIcon width="26" height="26" fill="#FFFFFF" /> */}
                </SearchButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export default Title;
