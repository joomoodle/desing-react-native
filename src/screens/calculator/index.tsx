import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import React, {useState} from 'react';

const Calculator = () => {
  const [inputText, setInputText] = useState<string>('');
  const operadores = ['+/-', '%', '/', '*', '-', '+'];

  const result: string = React.useMemo(() => {
    if (inputText && inputText.length > 1) {
      const last = inputText[inputText.length - 1];
      if (!operadores.includes(last)) {
        return inputText.replace("+", "");
      }
    }
    return '';
  }, [inputText]);

  const [elements] = React.useState([
    [{text: 'C'}, {text: '+/-'}, {text: '%'}, {text: '/'}],
    [{text: '7'}, {text: '8'}, {text: '9'}, {text: '*'}],
    [{text: '4'}, {text: '5'}, {text: '6'}, {text: '-'}],
    [{text: '1'}, {text: '2'}, {text: '3'}, {text: '+'}],
    [{text: '.'}, {text: '0'}, {text: '=', large: true}],
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.boxResult}>
        <Text style={styles.inputOperations}>{inputText}</Text>
        <Text style={styles.inputResult}>{result}</Text>
      </View>
      <View style={styles.boxButtons}>
        {elements.map((item: any, index: number) => {
          return (
            <View key={`item-${index}`} style={styles.itemActions}>
              {item.map((element: any, elementIndex: number) => {
                const isLast = item.length - 1 === elementIndex;
                const styleAdditional = isLast
                  ? {
                      backgroundColor: '#8C70C4',
                    }
                  : {};
                return (
                  <TouchableOpacity
                    style={[
                      styles.btnAction,
                      styleAdditional,
                      element?.large ? styles.btnLarge : {},
                    ]}
                    key={`btn-${index}-${elementIndex}`}
                    onPress={() => {
                      if (element.text === 'C') {
                        return setInputText('');
                      }

                      if (element.text === '=') {
                        return;
                      }

                      setInputText((old: string) => {
                        if (old) {
                          const last = old[old.length - 1];
                          if (
                            operadores.includes(last) &&
                            operadores.includes(element.text)
                          ) {
                            let newText = old.slice(0, -1) + element.text;
                            return newText;
                          }
                        }
                        return old + element.text;
                      });
                    }}>
                    <Text
                      style={[
                        styles.textBtn,
                        isLast
                          ? {
                              color: 'white',
                            }
                          : {},
                      ]}>
                      {element.text}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Calculator;
