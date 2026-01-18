/**
 * Smart'Building - Base de données des bâtiments
 * Ce fichier contient toutes les données des bâtiments du parc
 * Utilisé par les dashboards Parc et Immeuble pour la navigation dynamique
 */

const BUILDINGS_DATA = {
  'residence-soleil': {
    id: 'residence-soleil',
    name: 'Résidence Soleil',
    fullName: 'Résidence Soleil - Bâtiment Alpha',
    address: '15 rue de la Paix, Paris 75002',
    region: 'Île-de-France',
    status: 'warning',
    statusText: 'Alerte',
    dpe: 'C',
    surface: '12 450 m²',
    floors: 8,
    units: 64,
    equipments: 127,
    healthScore: 72,
    healthStatus: 'Attention requise',
    kpis: {
      consumption: { value: '24.5', unit: 'MWh', trend: '+3.2%', trendType: 'negative', period: 'vs mois dernier' },
      cost: { value: '€4 230', unit: '', trend: '-5.1%', trendType: 'positive', period: 'vs mois dernier' },
      comfort: { value: '21.4', unit: '°C', trend: 'Optimal', trendType: 'positive', period: 'CO2: 520 ppm' },
      maintenance: { value: '3', unit: '', trend: '1 critique', trendType: 'negative', period: '2 en attente' },
      co2: { value: '4.8', unit: 'tCO2', trend: '-8.3%', trendType: 'positive', period: 'vs N-1' }
    },
    tableData: {
      consumption: '2 450',
      variation: '+12%',
      variationType: 'up'
    },
    alerts: [
      { severity: 'critical', title: 'Surconsommation détectée', meta: 'Énergie • +20% vs seuil', time: 'Il y a 2h' },
      { severity: 'warning', title: 'Panne CTA-01 - Local Technique', meta: 'Ventilation • Défaut moteur', time: 'Il y a 15 min' },
      { severity: 'warning', title: 'Température élevée Hall', meta: 'Confort • 26.2°C (consigne: 22°C)', time: 'Il y a 2h' },
      { severity: 'info', title: 'Maintenance préventive prévue', meta: 'Chaudière • Dans 5 jours', time: 'Planifié' }
    ],
    zones: [
      { name: 'Parties Communes', floors: '8 étages', equipments: 24, status: 'ok' },
      { name: 'Logements Étages 1-4', floors: '32 lots', equipments: 48, status: 'ok' },
      { name: 'Logements Étages 5-8', floors: '32 lots', equipments: 55, status: 'critical' }
    ],
    equipmentsList: [
      { name: 'CTA-01', type: 'Centrale de Traitement d\'Air', status: 'error', statusText: 'En panne', metrics: [{ value: '0 m³/h', label: 'Débit' }, { value: '--°C', label: 'Temp.' }] },
      { name: 'CTA-02', type: 'Centrale de Traitement d\'Air', status: 'running', statusText: 'En marche', metrics: [{ value: '3 200 m³/h', label: 'Débit' }, { value: '19.5°C', label: 'Temp.' }] },
      { name: 'Chaudière GAZ-01', type: 'Chaudière Gaz Condensation', status: 'running', statusText: 'En marche', metrics: [{ value: '78%', label: 'Charge' }, { value: '65°C', label: 'Départ' }] },
      { name: 'ASC-01', type: 'Ascenseur Principal', status: 'running', statusText: 'En marche', metrics: [{ value: '142', label: 'Cycles/jour' }, { value: 'OK', label: 'État' }] },
      { name: 'TGBT Principal', type: 'Tableau Général Basse Tension', status: 'running', statusText: 'Actif', metrics: [{ value: '45.2 kW', label: 'Puissance' }, { value: '0.92', label: 'Cos φ' }] },
      { name: 'SSI Central', type: 'Système Sécurité Incendie', status: 'running', statusText: 'Armé', metrics: [{ value: '24', label: 'Détecteurs' }, { value: '0', label: 'Défauts' }] }
    ]
  },
  
  'tour-horizon': {
    id: 'tour-horizon',
    name: 'Tour Horizon',
    fullName: 'Tour Horizon - Bâtiment Principal',
    address: '8 avenue des Champs, Lyon 69003',
    region: 'Auvergne-RA',
    status: 'ok',
    statusText: 'Normal',
    dpe: 'B',
    surface: '18 200 m²',
    floors: 15,
    units: 120,
    equipments: 245,
    healthScore: 91,
    healthStatus: 'Excellent',
    kpis: {
      consumption: { value: '38.2', unit: 'MWh', trend: '-2.8%', trendType: 'positive', period: 'vs mois dernier' },
      cost: { value: '€6 890', unit: '', trend: '-3.2%', trendType: 'positive', period: 'vs mois dernier' },
      comfort: { value: '21.8', unit: '°C', trend: 'Optimal', trendType: 'positive', period: 'CO2: 485 ppm' },
      maintenance: { value: '1', unit: '', trend: '0 critique', trendType: 'positive', period: '1 préventif' },
      co2: { value: '7.2', unit: 'tCO2', trend: '-12.1%', trendType: 'positive', period: 'vs N-1' }
    },
    tableData: {
      consumption: '1 890',
      variation: '-3%',
      variationType: 'down'
    },
    alerts: [
      { severity: 'warning', title: 'Maintenance préventive requise', meta: 'CTA-01 • Remplacement filtres', time: 'Il y a 5h' },
      { severity: 'info', title: 'Optimisation IA suggérée', meta: 'Économie potentielle: 8%', time: 'Recommandé' }
    ],
    zones: [
      { name: 'Parties Communes', floors: '15 étages', equipments: 42, status: 'ok' },
      { name: 'Bureaux Étages 1-7', floors: '56 lots', equipments: 98, status: 'ok' },
      { name: 'Bureaux Étages 8-15', floors: '64 lots', equipments: 105, status: 'ok' }
    ],
    equipmentsList: [
      { name: 'CTA-01', type: 'Centrale de Traitement d\'Air', status: 'running', statusText: 'En marche', metrics: [{ value: '8 500 m³/h', label: 'Débit' }, { value: '20.2°C', label: 'Temp.' }] },
      { name: 'CTA-02', type: 'Centrale de Traitement d\'Air', status: 'running', statusText: 'En marche', metrics: [{ value: '7 800 m³/h', label: 'Débit' }, { value: '20.5°C', label: 'Temp.' }] },
      { name: 'PAC-01', type: 'Pompe à Chaleur', status: 'running', statusText: 'En marche', metrics: [{ value: '85%', label: 'COP' }, { value: '45°C', label: 'Départ' }] },
      { name: 'ASC-01', type: 'Ascenseur Principal', status: 'running', statusText: 'En marche', metrics: [{ value: '312', label: 'Cycles/jour' }, { value: 'OK', label: 'État' }] },
      { name: 'ASC-02', type: 'Ascenseur Secondaire', status: 'running', statusText: 'En marche', metrics: [{ value: '287', label: 'Cycles/jour' }, { value: 'OK', label: 'État' }] },
      { name: 'TGBT Principal', type: 'Tableau Général Basse Tension', status: 'running', statusText: 'Actif', metrics: [{ value: '112 kW', label: 'Puissance' }, { value: '0.95', label: 'Cos φ' }] }
    ]
  },
  
  'les-jardins': {
    id: 'les-jardins',
    name: 'Les Jardins',
    fullName: 'Résidence Les Jardins',
    address: '22 bd Maritime, Marseille 13008',
    region: 'PACA',
    status: 'ok',
    statusText: 'Normal',
    dpe: 'D',
    surface: '8 750 m²',
    floors: 5,
    units: 48,
    equipments: 89,
    healthScore: 84,
    healthStatus: 'Bon',
    kpis: {
      consumption: { value: '15.8', unit: 'MWh', trend: '-7.2%', trendType: 'positive', period: 'vs mois dernier' },
      cost: { value: '€2 890', unit: '', trend: '-9.5%', trendType: 'positive', period: 'vs mois dernier' },
      comfort: { value: '22.1', unit: '°C', trend: 'Optimal', trendType: 'positive', period: 'CO2: 510 ppm' },
      maintenance: { value: '0', unit: '', trend: 'Aucun', trendType: 'positive', period: 'Tout OK' },
      co2: { value: '3.1', unit: 'tCO2', trend: '-15.2%', trendType: 'positive', period: 'vs N-1' }
    },
    tableData: {
      consumption: '1 650',
      variation: '-7%',
      variationType: 'down'
    },
    alerts: [
      { severity: 'warning', title: 'Talon de nuit anormal', meta: 'Énergie • Consommation nocturne élevée', time: 'Il y a 8h' },
      { severity: 'info', title: 'Rapport mensuel disponible', meta: 'Décembre 2025', time: 'Il y a 1j' }
    ],
    zones: [
      { name: 'Parties Communes', floors: '5 étages', equipments: 18, status: 'ok' },
      { name: 'Logements Aile Est', floors: '24 lots', equipments: 35, status: 'ok' },
      { name: 'Logements Aile Ouest', floors: '24 lots', equipments: 36, status: 'warning' }
    ],
    equipmentsList: [
      { name: 'CTA-01', type: 'Centrale de Traitement d\'Air', status: 'running', statusText: 'En marche', metrics: [{ value: '2 100 m³/h', label: 'Débit' }, { value: '21.0°C', label: 'Temp.' }] },
      { name: 'Chaudière GAZ-01', type: 'Chaudière Gaz', status: 'running', statusText: 'En marche', metrics: [{ value: '65%', label: 'Charge' }, { value: '58°C', label: 'Départ' }] },
      { name: 'ASC-01', type: 'Ascenseur', status: 'running', statusText: 'En marche', metrics: [{ value: '98', label: 'Cycles/jour' }, { value: 'OK', label: 'État' }] },
      { name: 'TGBT Principal', type: 'Tableau Général Basse Tension', status: 'running', statusText: 'Actif', metrics: [{ value: '28.5 kW', label: 'Puissance' }, { value: '0.89', label: 'Cos φ' }] }
    ]
  },
  
  'batiment-central': {
    id: 'batiment-central',
    name: 'Bâtiment Central',
    fullName: 'Bâtiment Central - Siège Régional',
    address: '5 place Bellecour, Lyon 69002',
    region: 'Auvergne-RA',
    status: 'ok',
    statusText: 'Normal',
    dpe: 'B',
    surface: '6 320 m²',
    floors: 6,
    units: 42,
    equipments: 76,
    healthScore: 88,
    healthStatus: 'Très bon',
    kpis: {
      consumption: { value: '12.4', unit: 'MWh', trend: '+5.1%', trendType: 'negative', period: 'vs mois dernier' },
      cost: { value: '€2 180', unit: '', trend: '+2.3%', trendType: 'negative', period: 'vs mois dernier' },
      comfort: { value: '21.2', unit: '°C', trend: 'Optimal', trendType: 'positive', period: 'CO2: 495 ppm' },
      maintenance: { value: '2', unit: '', trend: '0 critique', trendType: 'positive', period: '2 préventifs' },
      co2: { value: '2.4', unit: 'tCO2', trend: '-4.8%', trendType: 'positive', period: 'vs N-1' }
    },
    tableData: {
      consumption: '1 420',
      variation: '+5%',
      variationType: 'up'
    },
    alerts: [
      { severity: 'info', title: 'Maintenance préventive planifiée', meta: 'CTA • Nettoyage filtres', time: 'Dans 2 jours' },
      { severity: 'info', title: 'Inspection ascenseur', meta: 'Contrôle réglementaire', time: 'Dans 1 semaine' }
    ],
    zones: [
      { name: 'Parties Communes', floors: '6 étages', equipments: 15, status: 'ok' },
      { name: 'Bureaux Administratifs', floors: '28 lots', equipments: 38, status: 'ok' },
      { name: 'Salles de Réunion', floors: '14 lots', equipments: 23, status: 'ok' }
    ],
    equipmentsList: [
      { name: 'CTA-01', type: 'Centrale de Traitement d\'Air', status: 'running', statusText: 'En marche', metrics: [{ value: '4 200 m³/h', label: 'Débit' }, { value: '20.8°C', label: 'Temp.' }] },
      { name: 'PAC-01', type: 'Pompe à Chaleur Réversible', status: 'running', statusText: 'Mode Chaud', metrics: [{ value: '72%', label: 'Charge' }, { value: '42°C', label: 'Départ' }] },
      { name: 'ASC-01', type: 'Ascenseur', status: 'running', statusText: 'En marche', metrics: [{ value: '156', label: 'Cycles/jour' }, { value: 'OK', label: 'État' }] },
      { name: 'TGBT Principal', type: 'Tableau Général Basse Tension', status: 'running', statusText: 'Actif', metrics: [{ value: '35.8 kW', label: 'Puissance' }, { value: '0.91', label: 'Cos φ' }] },
      { name: 'SSI Central', type: 'Système Sécurité Incendie', status: 'running', statusText: 'Armé', metrics: [{ value: '18', label: 'Détecteurs' }, { value: '0', label: 'Défauts' }] }
    ]
  },
  
  'eco-campus': {
    id: 'eco-campus',
    name: 'Éco-Campus',
    fullName: 'Éco-Campus - Bâtiment Énergie Positive',
    address: '100 avenue Verte, Montpellier 34000',
    region: 'Occitanie',
    status: 'ok',
    statusText: 'Exemplaire',
    dpe: 'A',
    surface: '9 800 m²',
    floors: 4,
    units: 52,
    equipments: 156,
    healthScore: 96,
    healthStatus: 'Excellent',
    kpis: {
      consumption: { value: '8.2', unit: 'MWh', trend: '-18.5%', trendType: 'positive', period: 'vs mois dernier' },
      cost: { value: '€1 450', unit: '', trend: '-22.1%', trendType: 'positive', period: 'vs mois dernier' },
      comfort: { value: '21.5', unit: '°C', trend: 'Optimal', trendType: 'positive', period: 'CO2: 420 ppm' },
      maintenance: { value: '0', unit: '', trend: 'Aucun', trendType: 'positive', period: 'Prédictif actif' },
      co2: { value: '0.8', unit: 'tCO2', trend: '-35.2%', trendType: 'positive', period: 'vs N-1' }
    },
    tableData: {
      consumption: '980',
      variation: '-18%',
      variationType: 'down'
    },
    alerts: [
      { severity: 'info', title: 'Production solaire optimale', meta: 'PV • 125% de l\'objectif', time: 'Aujourd\'hui' },
      { severity: 'info', title: 'Batterie chargée à 92%', meta: 'Stockage énergie', time: 'En cours' }
    ],
    zones: [
      { name: 'Parties Communes', floors: '4 étages', equipments: 32, status: 'ok' },
      { name: 'Bureaux Open Space', floors: '36 lots', equipments: 68, status: 'ok' },
      { name: 'Laboratoires', floors: '16 lots', equipments: 56, status: 'ok' }
    ],
    equipmentsList: [
      { name: 'PV-01', type: 'Installation Photovoltaïque', status: 'running', statusText: 'Production', metrics: [{ value: '45 kW', label: 'Puissance' }, { value: '125%', label: 'Objectif' }] },
      { name: 'BAT-01', type: 'Batterie de Stockage', status: 'running', statusText: 'Charge', metrics: [{ value: '92%', label: 'Niveau' }, { value: '200 kWh', label: 'Capacité' }] },
      { name: 'PAC-01', type: 'Pompe à Chaleur Géothermique', status: 'running', statusText: 'En marche', metrics: [{ value: '4.2', label: 'COP' }, { value: '38°C', label: 'Départ' }] },
      { name: 'VMC-01', type: 'VMC Double Flux', status: 'running', statusText: 'En marche', metrics: [{ value: '6 500 m³/h', label: 'Débit' }, { value: '95%', label: 'Récup.' }] },
      { name: 'GTC Central', type: 'Gestion Technique Centralisée', status: 'running', statusText: 'Actif', metrics: [{ value: '156', label: 'Points' }, { value: '0', label: 'Alarmes' }] }
    ]
  }
};

// Liste des bâtiments pour le tableau du Dashboard Parc
const BUILDINGS_LIST = Object.values(BUILDINGS_DATA);

// Fonction utilitaire pour récupérer un bâtiment par ID
function getBuildingById(id) {
  return BUILDINGS_DATA[id] || null;
}

// Fonction pour récupérer l'ID du bâtiment depuis l'URL
function getBuildingIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('building') || params.get('id') || 'residence-soleil';
}

// Export pour utilisation dans les modules ES6 (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BUILDINGS_DATA, BUILDINGS_LIST, getBuildingById, getBuildingIdFromUrl };
}
