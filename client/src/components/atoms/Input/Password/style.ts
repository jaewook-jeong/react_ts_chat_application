import styled from 'styled-components';

export const InputPasswordWrapper = styled.span`
box-sizing: border-box;
position: relative;
display: inline-block;
width: 100%;
min-width: 0;
padding: 4px 11px;
color: rgba(0,0,0,.85);
font-size: 14px;
line-height: 1.5715;
background-color: #fff;
background-image: none;
border: 1px solid #d9d9d9;
border-radius: 2px;
-webkit-transition: all .3s;
transition: all .3s;
display: -webkit-inline-box;
display: -ms-inline-flexbox;
display: inline-flex;
`;

export const InputPassword = styled.input`
-webkit-box-sizing: border-box;
box-sizing: border-box;
margin: 0;
font-variant: tabular-nums;
list-style: none;
-webkit-font-feature-settings: "tnum";
font-feature-settings: "tnum";
position: relative;
display: inline-block;
width: 100%;
min-width: 0;
padding: 4px 11px;
color: rgba(0,0,0,.85);
font-size: 14px;
line-height: 1.5715;
background-color: #fff;
background-image: none;
border: 1px solid #d9d9d9;
border-radius: 2px;
-webkit-transition: all .3s;
transition: all .3s;
padding: 0;
border: none;
outline: none;
`;

export const InputSuffix = styled.span`
margin-left: 4px;
display: flex;
-webkit-box-flex: 0;
-ms-flex: none;
flex: none;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
cursor: pointer;
`;