const {contextBridge,ipcRenderer}=require('electron');contextBridge.exposeInMainWorld('adtDesktop',{printInvoice:(payload)=>ipcRenderer.invoke('adt:print-invoice',payload)});
