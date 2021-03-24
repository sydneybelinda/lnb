import fetch from "isomorphic-unfetch";

import Config from "../config"

const API = Config.api;


export const getAllEscorts = async (ctx) => {
    const res = await fetch(`${API}/escorts/getall`);
    let escorts = await res.json();
    return escorts;
  };

  export const getEscort = async (username) => {
    const res = await fetch(`${API}/escort/${username}`);
    let escort = await res.json();
    return escort;
  };

  export const getServices = async (ctx) => {
    const res = await fetch(`${API}/services/get`);
    let s = await res.json();
    return s;
  };

  export const getServicesSeo = async (cat) => {
    const res = await fetch(`${API}/seoservices/${cat}`);
    let s = await res.json();
    return s;
  };

  export const getOtherSeo = async (cat) => {
    const res = await fetch(`${API}/seoother/${cat}`);
    let s = await res.json();
    return s;
  };
  export const getHairSeo = async (cat) => {
    const res = await fetch(`${API}/seohair/${cat}`);
    let s = await res.json();
    return s;
  };

  export const getEyesSeo = async (cat) => {
    const res = await fetch(`${API}/seoeyes/${cat}`);
    let s = await res.json();
    return s;
  };

  export const getAllServices = async () => {
   
    const eyes = await fetch(`${API}/seoeyes/get`);
    let e = await eyes.json();
    const hair = await fetch(`${API}/seohair/get`);
    const h = await hair.json();
    const other = await fetch(`${API}/seoother/get`);
    const o = await other.json();
    const services = await fetch(`${API}/seoservices/get`);
    let s = await services.json();


    let serv = {
      hair:h, 
      eyes:e,
      other:o,
      services:s
    }
  

    //let s = await serv.json();
    return serv;
  };

  export const getLocals = async () => {
    const res = await fetch(`${API}/local`);
    let s = await res.json();
    return s;
  };

  export const getLocal = async (city) => {
    const res = await fetch(`${API}/local/${city}`);
    let s = await res.json();
    return s;
  };




  export const getToday = () => {
  
    var today = [];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    const date = d.setHours(d.getHours()-5);
    today.number  = d.getDay(d.getHours()-5)
    today.day = days[today.number]

    return today;
  }
  
  export const getDay = (day) => {
 
    var today = []
    var d = new Date();
    var weekday = new Array(7);
    weekday["Sunday"] = 0;
    weekday["Monday"] = 1;
    weekday["Tuesday"] = 2;
    weekday["Wednesday"] = 3;
    weekday["Thursday"] = 4;
    weekday["Friday"] = 5;
    weekday["Saturday"] = 6;
  
    var n = weekday[day];

  

    return n;
  }

