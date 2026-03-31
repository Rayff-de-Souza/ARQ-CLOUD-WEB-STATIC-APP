#!/bin/bash

echo "🚀 Iniciando Fast Delivery System - Microfrontends"
echo ""

trap 'kill 0' EXIT

echo "📦 Iniciando MFE Pedidos (porta 5001)..."
cd mfe-pedidos && npm run dev &
PID_PEDIDOS=$!

echo "🗺️  Iniciando MFE Rotas (porta 5002)..."
cd mfe-rotas && npm run dev &
PID_ROTAS=$!

sleep 3

echo "🏠 Iniciando Host (porta 5173)..."
npm run dev &
PID_HOST=$!

echo ""
echo "✅ Todos os serviços foram iniciados!"
echo ""
echo "📍 URLs:"
echo "   Host:        http://localhost:5173"
echo "   MFE Pedidos: http://localhost:5001"
echo "   MFE Rotas:   http://localhost:5002"
echo ""
echo "⚠️  Pressione Ctrl+C para parar todos os serviços"
echo ""

wait
