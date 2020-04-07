#!/usr/bin/env node
import { game } from '../src/index.js';
import { rules, gameLogic } from '../games/game-prime.js';

game(rules, gameLogic);
