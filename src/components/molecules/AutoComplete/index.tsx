import { useState } from 'react';
import Text from '../../atoms/Text';
import {
    default as IconInputText,
    IProps as IconInputTextProps,
} from '../IconInputText';
import styles from './styles.module.css';

type TItem = { label: string; value: string; [key: string]: string | number };

export interface IProps {
    items: Array<TItem>;
    handleChange?: (value?: TItem) => void;
    label?: string;
    initialValue?: TItem;
    color?: IconInputTextProps['color'];
    labelColor?: IconInputTextProps['labelColor'];
    helperColor?: IconInputTextProps['helperColor'];
    name: string;
    onFocusOut?: (
        name: string,
        value?: TItem
    ) => void;
    handleItems?: (value?: TItem) => void;
}

const AutoComplete = ({
    items,
    handleChange,
    label,
    initialValue,
    name,
    labelColor,
    helperColor,
    color,
    onFocusOut,
    handleItems
}: IProps) => {
    const [value, setValue] = useState(initialValue);
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(-2);
    const [mouseOverItems, setMouseOverItems] = useState(false);

    const filterItems = items.filter((item) => {
        if (value?.value) {
            return item.value
                .toUpperCase()
                .startsWith(value?.value.toUpperCase());
        }
        return item;
    });

    const handleKeyDown = (e: any) => {
        switch (e.keyCode) {
            case 40: //down key
                setIndex((prev) =>
                    prev < filterItems.length - 1 ? prev + 1 : prev
                );
                break;
            case 38: //up key
                setIndex((prev) => (prev > -1 ? prev - 1 : -1));
                break;
            case 13: //enter key
                // eslint-disable-next-line no-case-declarations
                const item = index === -1 ? value : filterItems[index];
                setValue(item);
                if (handleChange)
                    handleChange({
                        label: capitalizing(item?.label ?? ''),
                        value: item?.value.toLowerCase() ?? '',
                    });
                setShow(false);
                setIndex(-2);
                break;
            default:
        }
    };

    const handleBlur = () => {
        if (!mouseOverItems) {
            setShow(false);
        }
        if (onFocusOut)
            onFocusOut(name, {
                label: capitalizing(value?.label ?? ''),
                value: value?.value.toLowerCase() ?? '',
            });
    };

    const handleItemClick = (item: any) => {
        setValue(item);
        if (handleChange) handleChange(item);
        setShow(false);
        setIndex(-2);
    };

    return (
        <div
            className={styles.container}
            onMouseLeave={() => setMouseOverItems(false)}
        >
            <IconInputText
                icon='search'
                label={label}
                initialValue={value?.label}
                name={name}
                onFocusOut={handleBlur}
                onFocus={() => {
                    setShow(true);
                }}
                onKeyDown={handleKeyDown}
                labelColor={labelColor}
                helperColor={helperColor}
                color={color}
                onInputChange={(v) => {
                    setValue({
                        label: v ?? '',
                        value: v ?? '',
                    });
                    setShow(true);
                    if (handleItems && filterItems.length < 1) handleItems({
                        label: v ?? '',
                        value: v ?? '',
                    });
                }}
            />
            <div
                className={styles.listContainer}
                onMouseOver={() => setMouseOverItems(true)}
                onMouseLeave={() => setMouseOverItems(false)}
            >
                {show && value?.value && (
                    <div
                        className={styles.item}
                        style={{
                            backgroundColor: index === -1 ? '#e9e9e9' : 'white',
                        }}
                        onClick={() => handleItemClick(value)}
                    >
                        <Text type='t8' color={color}>
                            Custom: {value?.label}
                        </Text>
                    </div>
                )}
                {show &&
                    filterItems &&
                    filterItems.map((item, key) => (
                        <div
                            className={styles.item}
                            key={key}
                            onClick={() => handleItemClick(item)}
                            style={{
                                backgroundColor:
                                    index === key ? '#e9e9e9' : 'white',
                            }}
                        >
                            {item.label}
                        </div>
                    ))}
            </div>
        </div>
    );
};

const capitalizing = (str: string) => {
    const arr = str.split(' ');
    const tmp = [];

    for (const word of arr) {
        tmp.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return tmp.join(' ');
};

export default AutoComplete;