import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-array-compatibilite',
    templateUrl: './array-compatibilite.component.html',
    styleUrls: ['./array-compatibilite.component.css']
})
export class ArrayCompatibiliteComponent {

    public ItemsTableauSage: Versions[] = [
        {
            number: 0,
            Date: new Date,
            codeActivite: 'XX1J',
            nomAddOn: '4CAD Master',
            versions: [
                {
                    remarque: "Add-on technique de base",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "N/A",
                    compatibleVersions: [{ label: "V6", value: "⚫️" },
                    { label: "V7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure A v11.18", value: "🟠" },
                    { label: "v11.18", value: "🟢" },
                    { label: "v11.20", value: "🟢" },
                    { label: "v12Inferieure A v12.28", value: "🟠" },
                    { label: "v12.28", value: "🟢" },
                    { label: "v12.29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 2,
                Date: new Date,
                codeActivite: 'XX1JA',
                nomAddOn: '4CAD Suivi atelier',
                versions: [
                {
                    remarque: "",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "< V4.2",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V4.2",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "Nouveau JDK & Nouvelle IHM ; Génération des PR & EQ",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V5.0",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "Fiches techniques",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V5.1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V5.2",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟡" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V5.3",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "Securisation matricule",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V5.4",
                    compatibleVersions: [
                        { label: "v6", value: "⚫️" },
                        { label: "v7", value: "⚫️" },
                        { label: "pu9", value: "⚫️" },
                        { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                        { label: "v11_18", value: "⚫️" },
                        { label: "v11_20", value: "⚫️" },
                        { label: "v12Inferieure_A_v12_28", value: "🟠" },
                        { label: "v12_28", value: "🟡" },
                        { label: "v12_29", value: "🟢" }
                    ]
                },
                ]
                
                },
                
                {
                number: 3,
                Date: new Date,
                codeActivite: 'XX1JB',
                nomAddOn: '4CAD Connecteur AirSupply',
                versions: [
                {
                    remarque: "Gestion H2M",
                    BriqueAERO: "Option",
                    BriqueMRO: "",
                    softwareVersion: "V1",
                    compatibleVersions: [
                        { label: "v6", value: "⚫️" },
                        { label: "v7", value: "⚫️" },
                        { label: "pu9", value: "⚫️" },
                        { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                        { label: "v11_18", value: "🟠" },
                        { label: "v11_20", value: "🟡" },
                        { label: "v12Inferieure_A_v12_28", value: "🟠" },
                        { label: "v12_28", value: "🟡" },
                        { label: "v12_29", value: "🟢" }
                    ]
                },
                {
                    remarque: "Gestion M2M",
                    BriqueAERO: "Option",
                    BriqueMRO: "",
                    softwareVersion: "V1",
                    compatibleVersions: [
                        { label: "v6", value: "⚫️" },
                        { label: "v7", value: "⚫️" },
                        { label: "pu9", value: "⚫️" },
                        { label: "v11Inferieure_A_v11_18", value: "🟠" },
                        { label: "v11_18", value: "🟠" },
                        { label: "v11_20", value: "🟡" },
                        { label: "v12Inferieure_A_v12_28", value: "🟠" },
                        { label: "v12_28", value: "🟡" },
                        { label: "v12_29", value: "🟢" }
                    ]
                }
                ]
                
                },
                
                {
                number: 4,
                Date: new Date,
                codeActivite: 'XX1JC',
                nomAddOn: '4CAD Gamme de contrôle',
                versions: [
                {
                    remarque: "",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V1",
                    compatibleVersions: [
                        { label: "v6", value: "⚫️" },
                        { label: "v7", value: "⚫️" },
                        { label: "pu9", value: "⚫️" },
                        { label: "v11Inferieure_A_v11_18", value: "🟠" },
                        { label: "v11_18", value: "🟠" },
                        { label: "v11_20", value: "🟡" },
                        { label: "v12Inferieure_A_v12_28", value: "🟠" },
                        { label: "v12_28", value: "🟡" },
                        { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 5,
                Date: new Date,
                codeActivite: 'XX1JD',
                nomAddOn: '4CAD Gestion des dérogations',
                versions: [
                {
                    remarque: "",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟡" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟡" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 6,
                Date: new Date,
                codeActivite: 'XX1JF',
                nomAddOn: '4CAD Gestion des FAI',
                versions: [
                {
                    remarque: "",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟠" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟠" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 7,
                Date: new Date,
                codeActivite: 'XX1JH',
                nomAddOn: '4CAD Gestion des habilitations',
                versions: [
                {
                    remarque: "",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟠" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟠" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 8,
                Date: new Date,
                codeActivite: 'XX1JI',
                nomAddOn: '4CAD TRS',
                versions: [
                {
                    remarque: "",
                    BriqueAERO: "",
                    BriqueMRO: "",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟠" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟠" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 9,
                Date: new Date,
                codeActivite: 'XX1JJ',
                nomAddOn: '4CAD Référence',
                versions: [{
                remarque: "Ne pas confondre avec 4CAD REF ultra-buggué",
                BriqueAERO: "Inclus",
                BriqueMRO: "Inclus",
                softwareVersion: "V1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟠" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟠" },
                { label: "v12_29", value: "🟢" }]
                }]
                
                },
                {
                number: 10,
                Date: new Date,
                codeActivite: 'XX1JK',
                nomAddOn: '4CAD Pilote stock-Kanban',
                versions: [{
                remarque: "CMJ et Pilotage stock",
                BriqueAERO: "Option", "BriqueMRO": "",
                softwareVersion: "V1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                { label: "v11_18", value: "⚫️" },
                { label: "v11_20", value: "⚫️" },
                { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                { label: "v12_28", value: "⚫️" },
                { label: "v12_29", value: "⚫️" }]
                },
                {
                remarque: "V1 + Kanban",
                BriqueAERO: "",
                BriqueMRO: "",
                softwareVersion: "V2",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                { label: "v11_18", value: "⚫️" },
                { label: "v11_20", value: "⚫️" },
                { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                { label: "v12_28", value: "⚫️" },
                { label: "v12_29", value: "⚫️" }]
                },
                {
                remarque: "V2 + DDMRP",
                BriqueAERO: "Option",
                BriqueMRO: "",
                softwareVersion: "V3",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟠" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟠" },
                { label: "v12_29", value: "🟢" }]
                },
                ]
                
                },
                
                {
                number: 11,
                Date: new Date,
                codeActivite: 'XX1JM',
                nomAddOn: '4CAD Gestion des moyens',
                versions: [{
                remarque: "X3 < V11",
                BriqueAERO: "Inclus",
                BriqueMRO: "Inclus",
                softwareVersion: "V1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "⚫️" },
                { label: "v11_20", value: "⚫️" },
                { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                { label: "v12_28", value: "⚫️" },
                { label: "v12_29", value: "⚫️" }]
                },
                {
                remarque: "",
                BriqueAERO: "Inclus",
                BriqueMRO: "",
                softwareVersion: "V2",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟡" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟠" },
                { label: "v12_29", value: "🟢" }]
                },
                ]
                
                },
                
                {
                number: 12,
                Date: new Date,
                codeActivite: 'XX1JO',
                nomAddOn: '4CAD Doc',
                versions: [{
                remarque: "Normalisation R&D",
                BriqueAERO: "plus vendu",
                BriqueMRO: "plus vendu",
                softwareVersion: "V.3.0",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "⚫️" },
                { label: "v11_20", value: "⚫️" },
                { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                { label: "v12_28", value: "⚫️" },
                { label: "v12_29", value: "⚫️" }]
                },
                {
                remarque: "Accès HTTPS : plus d'evo au profit de 4CAD GED",
                BriqueAERO: "",
                BriqueMRO: "",
                softwareVersion: "V3.1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "⚫️" },
                { label: "v11_20", value: "⚫️" },
                { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟠" }]
                }
                ]
                
                },
                
                {
                number: 13,
                Date: new Date,
                codeActivite: 'XX1JP',
                nomAddOn: '4CAD Pièces rejetées',
                versions: [{
                remarque: "",
                BriqueAERO: "Inclus",
                BriqueMRO: "",
                softwareVersion: "V1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟡" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟢" }]
                }]
                
                },
                {
                number: 14,
                Date: new Date,
                codeActivite: 'XX1JQ',
                nomAddOn: '4CAD Gestion de la qualité',
                versions: [{
                remarque: "X3 < V11",
                BriqueAERO: "Inclus",
                BriqueMRO: "Inclus",
                softwareVersion: "V1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                { label: "v11_18", value: "⚫️" },
                { label: "v11_20", value: "⚫️" },
                { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                { label: "v12_28", value: "⚫️" },
                { label: "v12_29", value: "⚫️" }]
                },
                {
                remarque: "",
                BriqueAERO: "Inclus",
                BriqueMRO: "Inclus",
                softwareVersion: "V2",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                { label: "v11_18", value: "⚫️" },
                { label: "v11_20", value: "⚫️" },
                { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                { label: "v12_28", value: "⚫️" },
                { label: "v12_29", value: "⚫️" }]
                },
                {
                remarque: "",
                BriqueAERO: "Inclus",
                BriqueMRO: "Inclus",
                softwareVersion: "2021R1-2021R3",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                { label: "v11_18", value: "⚫️" },
                { label: "v11_20", value: "⚫️" },
                { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                { label: "v12_28", value: "⚫️" },
                { label: "v12_29", value: "⚫️" }]
                },
                {
                remarque: "",
                BriqueAERO: "Inclus",
                BriqueMRO: "Inclus",
                softwareVersion: "2022R1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟡" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟢" }]
                }]
                
                },
                
                
                {
                number: 15,
                Date: new Date,
                codeActivite: 'XX1JR',
                nomAddOn: '4CAD Multiple sourcing',
                versions: [{
                remarque: "En cours d'implémentation",
                BriqueAERO: "Inclus",
                BriqueMRO: "",
                softwareVersion: "V1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟡" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟢" }]
                }]
                
                },
                {
                number: 16,
                Date: new Date,
                codeActivite: 'XX1JS',
                nomAddOn: '4CAD Serial produit avancé',
                versions: [{
                remarque: "Serialisation au lancement",
                BriqueAERO: "Inclus",
                BriqueMRO: "",
                softwareVersion: "V1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟡" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟢" }]
                }]
                
                },
                {
                number: 17,
                Date: new Date,
                codeActivite: 'XX1JT',
                nomAddOn: '4CAD Devis technique',
                versions: [
                {
                    remarque: "X3 < V11.12",
                    BriqueAERO: "Option",
                    BriqueMRO: "",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "Réécriture L4G",
                    BriqueAERO: "Option", "BriqueMRO": "",
                    softwareVersion: "V2",
                    compatibleVersions: [
                        { label: "v6", value: "⚫️" },
                        { label: "v7", value: "⚫️" },
                        { label: "pu9", value: "⚫️" },
                        { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                        { label: "v11_18", value: "⚫️" },
                        { label: "v11_20", value: "⚫️" },
                        { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                        { label: "v12_28", value: "⚫️" },
                        { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "Sortie le 15/12/2020",
                    BriqueAERO: "Option",
                    BriqueMRO: "",
                    softwareVersion: "2020R1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟡" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟡" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 18,
                Date: new Date,
                codeActivite: 'XX1JV',
                nomAddOn: '4CAD Nomentclature SAV',
                versions: [{
                remarque: "",
                BriqueAERO: "Option",
                BriqueMRO: "",
                softwareVersion: "V1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟡" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟢" }]
                }]
                
                },
                {
                number: 19,
                Date: new Date,
                codeActivite: 'XX1JW',
                nomAddOn: '4CAD Instructions opératoire',
                versions: [{
                remarque: "",
                BriqueAERO: "Inclus",
                BriqueMRO: "Inclus",
                softwareVersion: "V1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟡" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟢" }]
                }
                ]
                },   
                {
                number: 20,
                Date: new Date,
                codeActivite: 'XX1JX',
                nomAddOn: "4CAD Gestionnaires d'interfaces",
                versions: [
                {
                    remarque: "compatibleVersions non normalisées (YANMAR V6, …)",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "Normalisation R&D",
                    BriqueAERO: "",
                    BriqueMRO: "",
                    softwareVersion: "V2",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟡" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟡" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 21,
                Date: new Date,
                codeActivite: 'XX1JY',
                nomAddOn: "4CAD Scorcards",
                versions: [
                {
                    remarque: "X3 < V11.9",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "Réécriture L4G",
                    BriqueAERO: "",
                    BriqueMRO: "",
                    softwareVersion: "V2",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟡" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟡" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 22,
                Date: new Date,
                codeActivite: 'XX3M',
                nomAddOn: "4CAD MIS",
                versions: [
                {
                    remarque: "MRO périmètre Airfoils",
                    BriqueAERO: "",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                }, {
                
                    remarque: "",
                    BriqueAERO: "",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V2",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "Gestion de sous-ensembles/devis SFR",
                    BriqueAERO: "",
                    BriqueMRO: "Inclus",
                    softwareVersion: "2021R1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟡" },
                    { label: "v12_29", value: "🟢" }]
                },
                
                ]
                
                },
                
                {
                number: 23,
                Date: new Date,
                codeActivite: 'XX3MD',
                nomAddOn: "4CAD Gestion du salarié",
                versions: [
                {
                    remarque: "",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "Affectations tâches, opérations, congés",
                    BriqueAERO: "", "BriqueMRO": "",
                    softwareVersion: "V2",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟡" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟡" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 24,
                Date: new Date,
                codeActivite: 'XX3MI',
                nomAddOn: "4CAD Programmes machines",
                versions: [
                {
                    remarque: "",
                    BriqueAERO: "Inclus",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟡" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟡" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                {
                number: 25,
                Date: new Date,
                codeActivite: 'XX3MF',
                nomAddOn: "4CAD Check-list de contrôles",
                versions: [
                {
                    remarque: "",
                    BriqueAERO: "",
                    BriqueMRO: "Inclus",
                    softwareVersion: "V1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "⚫️" },
                    { label: "v11_18", value: "⚫️" },
                    { label: "v11_20", value: "⚫️" },
                    { label: "v12Inferieure_A_v12_28", value: "⚫️" },
                    { label: "v12_28", value: "⚫️" },
                    { label: "v12_29", value: "⚫️" }]
                },
                {
                    remarque: "",
                    BriqueAERO: "",
                    BriqueMRO: "Inclus",
                    softwareVersion: "2021R1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟡" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟡" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                
                {
                number: 26,
                Date: new Date,
                codeActivite: 'XX1J0',
                nomAddOn: "4CAD-Entreprise Service Bus",
                versions: [{
                remarque: "Connecteur point à point X3/SF",
                BriqueAERO: "plus vendu",
                BriqueMRO: "plus vendu",
                softwareVersion: "V1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟡" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟡" }]
                }]
                
                },
                {
                number: 27,
                Date: new Date,
                codeActivite: 'XX1J1',
                nomAddOn: "4CAD GED pour Sage X3",
                versions: [{
                remarque: "4CAD GED R1",
                BriqueAERO: "",
                BriqueMRO: "",
                softwareVersion: "R1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "⚫️" },
                { label: "pu9", value: "⚫️" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟡" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟢" }]
                }]
                
                },
                {
                number: 28,
                Date: new Date,
                codeActivite: 'XX1J2',
                nomAddOn: "4CAD LINK 2.0",
                versions: [
                {
                    remarque: "",
                    BriqueAERO: "",
                    BriqueMRO: "",
                    softwareVersion: "Release 1.2.1",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟡" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟡" },
                    { label: "v12_29", value: "🟡" }]
                },
                {
                
                    remarque: "",
                    BriqueAERO: "",
                    BriqueMRO: "",
                    softwareVersion: "Release 1.3.0",
                    compatibleVersions: [{ label: "v6", value: "⚫️" },
                    { label: "v7", value: "⚫️" },
                    { label: "pu9", value: "⚫️" },
                    { label: "v11Inferieure_A_v11_18", value: "🟠" },
                    { label: "v11_18", value: "🟡" },
                    { label: "v11_20", value: "🟡" },
                    { label: "v12Inferieure_A_v12_28", value: "🟠" },
                    { label: "v12_28", value: "🟡" },
                    { label: "v12_29", value: "🟢" }]
                }
                ]
                
                },
                
                {
                number: 29,
                Date: new Date,
                codeActivite: 'XX1J3',
                nomAddOn: "4CAD ELO DEMAT",
                versions: [{
                remarque: "",
                BriqueAERO: "",
                BriqueMRO: "",
                softwareVersion: "R1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "🟠" },
                { label: "pu9", value: "🟠" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟡" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟢" }]
                }]
                
                },
                {
                number: 30,
                Date: new Date,
                codeActivite: 'XX1J4',
                nomAddOn: "4CAD ELO DEMAT (Tenor)",
                versions: [{
                remarque: "",
                BriqueAERO: "",
                BriqueMRO: "",
                softwareVersion: "R1",
                compatibleVersions: [{ label: "v6", value: "⚫️" },
                { label: "v7", value: "🟠" },
                { label: "pu9", value: "🟠" },
                { label: "v11Inferieure_A_v11_18", value: "🟠" },
                { label: "v11_18", value: "🟠" },
                { label: "v11_20", value: "🟡" },
                { label: "v12Inferieure_A_v12_28", value: "🟠" },
                { label: "v12_28", value: "🟡" },
                { label: "v12_29", value: "🟢" }]
                }]
                
                }
                
    ]
}

interface Versions {
    number: number,
    Date: Date,
    codeActivite: string,
    nomAddOn: string,
    versions: {
        remarque: string,
        BriqueAERO: string,
        BriqueMRO: string,
        softwareVersion: string,
        compatibleVersions:
        {
            label: string,
            value: string
        }[]
    }[]
}