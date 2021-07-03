import { useEffect, useState } from 'react';
import Text from '../../atoms/Text';
import {
    default as IconInputText,
    IProps as IconInputTextProps,
} from '../IconInputText';
import styles from './styles.module.css';

type TItem = string;

export interface IProps
    extends Omit<IconInputTextProps, 'initialValue' | 'onFocusOut'> {
    items: Array<TItem>;
    handleChange?: (value?: TItem) => void;
    label?: string;
    initialValue?: TItem;
    name: string;
    onFocusOut?: (name: string, value?: TItem) => void;
    handleItems?: (value?: TItem) => void;
    ItemComponent?: any;
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
    handleItems,
    ItemComponent,
    ...other
}: IProps) => {
    const [value, setValue] = useState(initialValue ?? '');
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(-1);
    const [mouseOverItems, setMouseOverItems] = useState(false);

    const filterItems = items.filter((item) => {
        if (value) {
            return item.toUpperCase().startsWith(value?.toUpperCase());
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
                if (handleChange) handleChange(item);
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
        if (onFocusOut) onFocusOut(name, value);
    };

    const handleItemClick = (item: any) => {
        setValue(item);
        if (handleChange) handleChange(item);
        setShow(false);
        setIndex(-2);
    };

    useEffect(() => {
        if (value.length >= 3) setShow(true);
        else setShow(false);
    }, [value]);

    return (
        <div
            className={styles.container}
            onMouseLeave={() => setMouseOverItems(false)}
        >
            <IconInputText
                {...other}
                icon='search'
                label={label}
                initialValue={value}
                name={name}
                onFocusOut={handleBlur}
                onFocus={() => {
                    if (value.length >= 3) setShow(true);
                }}
                onKeyDown={handleKeyDown}
                labelColor={labelColor}
                helperColor={helperColor}
                color={color}
                onInputChange={(v) => {
                    setValue(v ?? '');
                    if (handleItems && filterItems.length < 1) handleItems(v);
                }}
            />
            <div
                className={styles.listContainer}
                onMouseOver={() => setMouseOverItems(true)}
                onMouseLeave={() => setMouseOverItems(false)}
            >
                {show && filterItems.length === 0 && (
                    <div
                        className={styles.item}
                        style={{
                            backgroundColor: index === -1 ? '#e9e9e9' : 'white',
                        }}
                    >
                        <Text type='t8' color={color}>
                            No Results
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
                            {ItemComponent ? (
                                <ItemComponent item={item} />
                            ) : (
                                item
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AutoComplete;
