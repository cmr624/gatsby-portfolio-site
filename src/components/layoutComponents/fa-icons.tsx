import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import {fab, faReact} from  '@fortawesome/free-brands-svg-icons';
import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';
// icon requirements 
/**
 * github (x)
 * javascript (x)
 * gatsby
 * unity (x)
 * vr (x)
 * html (x)
 * react (x)
 * css (x)
 * c#
 * typescript
 * phaser
 */
export interface IconProps {
    faIconName: IconName, 
    skillString : string,
}
export const FaSortButton = (props : IconProps) => {
    return (<>
        <FontAwesomeIcon icon={faReact} size="2x"/>
        <p>{props.skillString.replace(props.skillString.charAt(0), props.skillString.charAt(0).toUpperCase())}</p>
       </> )
}
interface FaToggleButtonGroupProps {
arrayIconProps : Array<IconProps>;
}
export const FaToggleButtonGroup = (props : FaToggleButtonGroupProps) => {
    return(<>
        <ToggleButtonGroup type = "checkbox" defaultValue = {[]} className="mb-2">
           {props.arrayIconProps.map((e, index) => {
               return(<>
                    <ToggleButton value={index}>
                        <FaSortButton {...e}/> 
                    </ToggleButton>
               </>)
           })} 
        </ToggleButtonGroup> 
    </>)
}