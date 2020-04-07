#!/usr/bin/env node
import { game } from '../src/index.js';
import { rules, gameLogic } from '../games/game-even.js';

game(rules, gameLogic);
