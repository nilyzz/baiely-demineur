        // Ranked System
        // Provisional balance values: validate dimensions, mine counts and timers through playtesting.
        const RANKS = [
            { name: "Bronze III", tier: 0, cols: 10, rows: 9, mines: 10, timeLimit: 100 },
            { name: "Bronze II", tier: 1, cols: 10, rows: 9, mines: 10, timeLimit: 90 },
            { name: "Bronze I", tier: 2, cols: 10, rows: 9, mines: 10, timeLimit: 80 },
            { name: "Argent III", tier: 3, cols: 12, rows: 10, mines: 15, timeLimit: 75 },
            { name: "Argent II", tier: 4, cols: 12, rows: 10, mines: 15, timeLimit: 65 },
            { name: "Argent I", tier: 5, cols: 12, rows: 10, mines: 15, timeLimit: 55 },
            { name: "Or III", tier: 6, cols: 14, rows: 11, mines: 20, timeLimit: 85 },
            { name: "Or II", tier: 7, cols: 14, rows: 11, mines: 20, timeLimit: 75 },
            { name: "Or I", tier: 8, cols: 14, rows: 11, mines: 20, timeLimit: 65 },
            { name: "Platine III", tier: 9, cols: 16, rows: 12, mines: 30, timeLimit: 100 },
            { name: "Platine II", tier: 10, cols: 16, rows: 12, mines: 30, timeLimit: 90 },
            { name: "Platine I", tier: 11, cols: 16, rows: 12, mines: 30, timeLimit: 80 },
            { name: "Diamant III", tier: 12, cols: 20, rows: 13, mines: 45, timeLimit: 120 },
            { name: "Diamant II", tier: 13, cols: 20, rows: 13, mines: 45, timeLimit: 110 },
            { name: "Diamant I", tier: 14, cols: 20, rows: 13, mines: 45, timeLimit: 100 },
            { name: "Légende III", tier: 15, cols: 24, rows: 15, mines: 70, timeLimit: 145 },
            { name: "Légende II", tier: 16, cols: 24, rows: 15, mines: 70, timeLimit: 135 },
            { name: "Légende I", tier: 17, cols: 24, rows: 15, mines: 70, timeLimit: 125 },
            { name: "Démineur III", tier: 18, cols: 30, rows: 16, mines: 99, timeLimit: 170 },
            { name: "Démineur II", tier: 19, cols: 30, rows: 16, mines: 99, timeLimit: 155 },
            { name: "Démineur I", tier: 20, cols: 30, rows: 16, mines: 99, timeLimit: 140 }
        ];
        const RANK_BADGES = [
            { prefix: 'Bronze', icon: 'fa-shield-halved', ink: '#d99a62', glow: '217, 154, 98' },
            { prefix: 'Argent', icon: 'fa-award', ink: '#d5dde7', glow: '190, 204, 220' },
            { prefix: 'Or', icon: 'fa-crown', ink: '#f5cd61', glow: '245, 205, 97' },
            { prefix: 'Platine', icon: 'fa-sun', ink: '#71e0dc', glow: '113, 224, 220' },
            { prefix: 'Diamant', icon: 'fa-gem', ink: '#84baff', glow: '132, 186, 255' },
            { prefix: 'Légende', icon: 'fa-dragon', ink: '#c49aff', glow: '196, 154, 255' },
            { prefix: 'Démineur', icon: 'fa-bomb', ink: '#ff8a9b', glow: '255, 138, 155' }
        ];

        const THEME_PALETTE = [
            { id: 'rouge', name: 'Rouge', hue: 0, accent: '#ff6b6b', rgb: '255, 107, 107' },
            { id: 'corail', name: 'Corail', hue: 12, accent: '#ff8066', rgb: '255, 128, 102' },
            { id: 'orange', name: 'Orange', hue: 28, accent: '#ffa24c', rgb: '255, 162, 76' },
            { id: 'terre', name: 'Terre', hue: 34, accent: '#a47840', rgb: '164, 120, 64' },
            { id: 'ambre', name: 'Ambre', hue: 42, accent: '#f0b84b', rgb: '240, 184, 75' },
            { id: 'jaune', name: 'Jaune', hue: 55, accent: '#e4d44a', rgb: '228, 212, 74' },
            { id: 'olive', name: 'Olive', hue: 70, accent: '#a4b452', rgb: '164, 180, 82' },
            { id: 'vert', name: 'Vert', hue: 82, accent: '#a8cc52', rgb: '168, 204, 82' },
            { id: 'emeraude', name: 'Émeraude', hue: 140, accent: '#50c878', rgb: '80, 200, 120' },
            { id: 'foret', name: 'Forêt', hue: 145, accent: '#529875', rgb: '82, 152, 117' },
            { id: 'turquoise', name: 'Turquoise', hue: 168, accent: '#45c9b0', rgb: '69, 201, 176' },
            { id: 'cyan', name: 'Cyan', hue: 187, accent: '#48c7d9', rgb: '72, 199, 217' },
            { id: 'ocean', name: 'Océan', hue: 195, accent: '#59bdcd', rgb: '89, 189, 205' },
            { id: 'acier', name: 'Acier', hue: 202, accent: '#7b9eb3', rgb: '123, 158, 179' },
            { id: 'nuit', name: 'Nuit', hue: 213, accent: '#4a85b9', rgb: '74, 133, 185' },
            { id: 'bleu', name: 'Bleu', hue: 215, accent: '#5795f2', rgb: '87, 149, 242' },
            { id: 'indigo', name: 'Indigo', hue: 237, accent: '#7078ed', rgb: '112, 120, 237' },
            { id: 'violet', name: 'Violet', hue: 264, accent: '#a277ee', rgb: '162, 119, 238' },
            { id: 'prune', name: 'Prune', hue: 290, accent: '#9c64a9', rgb: '156, 100, 169' },
            { id: 'magenta', name: 'Magenta', hue: 305, accent: '#db69d0', rgb: '219, 105, 208' },
            { id: 'rose', name: 'Rose', hue: 338, accent: '#f075a5', rgb: '240, 117, 165' },
            { id: 'graphite', name: 'Graphite', hue: 210, accent: '#758fa6', rgb: '117, 143, 166' },
            { id: 'ardoise', name: 'Ardoise', hue: 214, accent: '#8295ac', rgb: '130, 149, 172' },
            { id: 'noir', name: 'Noir', hue: 215, accent: '#c4ccd6', rgb: '196, 204, 214', neutral: 'dark' },
            { id: 'blanc', name: 'Blanc', hue: 215, accent: '#3e4b5a', rgb: '62, 75, 90', neutral: 'light' }
        ];

        const colorHsl = (hue, saturation, lightness) => 'hsl(' + hue + ' ' + saturation + '% ' + lightness + '%)';
        const SITE_THEMES = THEME_PALETTE.map(color => ({
            ...color,
            page: color.neutral === 'dark' ? '#05070a' : color.neutral === 'light' ? '#f0f2f5' : colorHsl(color.hue, 38, 8),
            pageMid: color.neutral === 'dark' ? '#11151c' : color.neutral === 'light' ? '#dfe5eb' : colorHsl(color.hue, 40, 13),
            pageDeep: color.neutral === 'dark' ? '#020304' : color.neutral === 'light' ? '#fafbfc' : colorHsl(color.hue, 42, 5),
            ambientRgb: color.neutral === 'dark' ? '54, 66, 82' : color.neutral === 'light' ? '192, 203, 216' : color.rgb,
            light: color.neutral === 'light'
        }));
        const SURFACE_THEMES = THEME_PALETTE.map(color => ({
            ...color,
            base: color.neutral === 'dark' ? '#08090c' : color.neutral === 'light' ? '#e2e7ed' : colorHsl(color.hue, 27, 10),
            raised: color.neutral === 'dark' ? '#13151a' : color.neutral === 'light' ? '#f8fafc' : colorHsl(color.hue, 30, 16),
            soft: color.neutral === 'dark' ? '#050609' : color.neutral === 'light' ? '#d4dce5' : colorHsl(color.hue, 30, 7),
            glowRgb: color.neutral === 'light' ? '72, 88, 107' : color.rgb,
            line: color.neutral === 'dark' ? 'rgba(173, 184, 199, .16)' : color.neutral === 'light' ? 'rgba(37, 50, 66, .19)' : 'rgba(' + color.rgb + ', .16)',
            ...(color.neutral === 'light' ? { ink: '#202a36', muted: '#536171', buttonInk: '#f8fafc' } : {})
        }));
        const GRID_THEMES = THEME_PALETTE.map(color => ({
            ...color,
            board: color.neutral === 'dark' ? '#030405' : color.neutral === 'light' ? '#e9edf2' : colorHsl(color.hue, 33, 8),
            tileStart: color.neutral === 'dark' ? '#1a1c20' : color.neutral === 'light' ? '#ffffff' : colorHsl(color.hue, 30, 21),
            tileEnd: color.neutral === 'dark' ? '#090a0c' : color.neutral === 'light' ? '#dfe5eb' : colorHsl(color.hue, 32, 14),
            tileHover: color.neutral === 'dark' ? '#292c32' : color.neutral === 'light' ? '#cbd5df' : colorHsl(color.hue, 34, 27),
            revealed: color.neutral === 'dark' ? '#08090b' : color.neutral === 'light' ? '#d4dce5' : colorHsl(color.hue, 30, 9),
            edgeRgb: color.neutral === 'dark' ? '155, 165, 179' : color.neutral === 'light' ? '85, 101, 118' : color.rgb,
            ...(color.neutral === 'dark' ? { tileInk: '#f1f3f6' } : color.neutral === 'light' ? { tileInk: '#263342' } : {})
        }));

        const STORAGE_KEYS = {
            game: 'baiely_mines_aaa_v1',
            classicDifficulty: 'baiely_classic_difficulty_v1',
            logicalMode: 'baiely_logical_mode_v1',
            settings: 'baiely_settings_v1'
        };

        function readStorage(key) {
            try { return window.localStorage.getItem(key); } catch (error) { return null; }
        }

        function writeStorage(key, value) {
            try { window.localStorage.setItem(key, value); return true; } catch (error) { return false; }
        }

        function removeStorage(key) {
            try { window.localStorage.removeItem(key); } catch (error) {}
        }

        const DEFAULT_KEY_BINDINGS = { reveal: ['Enter', 'Space'], flag: ['f'], restart: ['r'] };
        const DEFAULT_MOUSE_BINDINGS = { reveal: 0, flag: 2, restart: 1 };

        function normalizeControlKey(key) {
            if (key === ' ' || key === 'Spacebar' || key === 'Space') return 'Space';
            if (typeof key !== 'string' || !key) return null;
            return key.length === 1 ? key.toLowerCase() : key;
        }

        function isBindableControlKey(key) {
            return key === 'Enter' || key === 'Space' || key === 'Code:BracketLeft' ||
                (typeof key === 'string' && key.length === 1);
        }

        function controlKeyFromEvent(event) {
            const key = normalizeControlKey(event.key);
            if (isBindableControlKey(key)) return key;
            if (event.key === 'Dead' && event.code === 'BracketLeft') return 'Code:BracketLeft';
            return key;
        }

        function isAltGraphEvent(event) {
            return typeof event.getModifierState === 'function' && event.getModifierState('AltGraph');
        }

        function hasShortcutModifier(event) {
            return (event.ctrlKey || event.metaKey || event.altKey) && !isAltGraphEvent(event);
        }

        function controlKeysConflict(first, second) {
            const firstIdentity = first === 'Code:BracketLeft' ? '^' : first;
            const secondIdentity = second === 'Code:BracketLeft' ? '^' : second;
            return firstIdentity === secondIdentity;
        }

        function isControlBindingPressed(action, event) {
            const key = controlKeyFromEvent(event);
            const codeKey = event.code ? 'Code:' + event.code : null;
            return keyBindings[action].includes(key) || keyBindings[action].includes(codeKey);
        }

        function loadUserSettings() {
            let saved = {};
            try {
                const parsed = JSON.parse(readStorage(STORAGE_KEYS.settings) || '{}');
                if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) saved = parsed;
            } catch (error) {}

            const savedBindings = saved.keyBindings && typeof saved.keyBindings === 'object' ? saved.keyBindings : {};
            const readBinding = (value, fallback) => {
                const values = Array.isArray(value) ? value : [value];
                const valid = values.map(normalizeControlKey).filter(isBindableControlKey);
                return valid.length ? [...new Set(valid)] : [...fallback];
            };
            const keyBindings = {
                reveal: readBinding(savedBindings.reveal, DEFAULT_KEY_BINDINGS.reveal),
                flag: readBinding(savedBindings.flag, DEFAULT_KEY_BINDINGS.flag),
                restart: readBinding(savedBindings.restart, DEFAULT_KEY_BINDINGS.restart)
            };
            const assignedKeys = Object.values(keyBindings).flat();
            const assignedIdentities = assignedKeys.map(key => key === 'Code:BracketLeft' ? '^' : key);
            if (new Set(assignedIdentities).size !== assignedIdentities.length) {
                Object.assign(keyBindings, Object.fromEntries(Object.entries(DEFAULT_KEY_BINDINGS).map(([action, keys]) => [action, [...keys]])));
            }

            const savedMouseBindings = saved.mouseBindings && typeof saved.mouseBindings === 'object' ? saved.mouseBindings : {};
            const mouseBindings = {
                reveal: savedMouseBindings.reveal,
                flag: savedMouseBindings.flag,
                restart: savedMouseBindings.restart
            };
            const mouseButtons = Object.values(mouseBindings);
            if (mouseButtons.some(button => !Number.isInteger(button) || button < 0 || button > 2) || new Set(mouseButtons).size !== mouseButtons.length) {
                Object.assign(mouseBindings, DEFAULT_MOUSE_BINDINGS);
            }

            const volume = typeof saved.volume === 'number' ? saved.volume : NaN;
            return {
                audioEnabled: typeof saved.audioEnabled === 'boolean' ? saved.audioEnabled : true,
                volume: Number.isFinite(volume) ? Math.max(0, Math.min(1, volume)) : 0.55,
                keyBindings,
                mouseBindings
            };
        }

        function saveUserSettings() {
            writeStorage(STORAGE_KEYS.settings, JSON.stringify({ audioEnabled, volume: audioVolume, keyBindings, mouseBindings }));
            updateKeyboardHelp();
            updateMouseHelp();
        }

        function formatMouseButton(button) {
            return ({ 0: 'Clic gauche', 1: 'Clic molette', 2: 'Clic droit' })[button] || 'Bouton inconnu';
        }

        function formatControlKey(key) {
            if (key === 'Space') return 'Espace';
            if (key === 'Enter') return 'Entrée';
            if (key === 'Code:BracketLeft') return '^';
            return key.length === 1 ? key.toUpperCase() : key;
        }

        // Persistent App State
        let gameState = {
            username: '',
            rankedTier: 0,
            hasSeenTutorial: false,
            themeId: 'bleu',
            surfaceThemeId: 'bleu',
            gridThemeId: 'bleu',
            stats: { gamesPlayed: 0, wins: 0, bestTime: null, records: {}, revealedCells: 0, totalTime: 0, timedGames: 0, modes: {} }
        };

        let activeShopCategory = 'background';
        let pageReturnScreenId = null;
        let pendingScreenExit = null;
        let themeTransitionTimer = null;

        let currentMode = 'classic';
        let classicDifficulty = readStorage(STORAGE_KEYS.classicDifficulty) || 'logic';
        let classicGridChosen = false;
        let logicalModeEnabled = readStorage(STORAGE_KEYS.logicalMode) === 'true';
        let boardCols = 12;
        let boardRows = 10;
        let mineCount = 15;
        let timeLimitSec = 240;
        let seededBoardRandomState = 1;
        let activeDailyDateKey = null;

        let board = [];
        let animateNextBoardRefresh = false;
        let nextBoardRefreshMotion = 'quick';
        let boardRefreshAnimationTimer = null;
        let gameOver = false;
        let gameWon = false;
        let gameStarted = false;
        let isGeneratingBoard = false;
        let boardGenerationId = 0;
        let timerInterval = null;
        let timerStartedAt = 0;
        let timeElapsed = 0;
        let gameTimerPaused = false;
        let flagsLeft = 0;
        let flagMode = false;
        let userSettings = loadUserSettings();
        let audioEnabled = userSettings.audioEnabled;
        let audioVolume = userSettings.volume;
        let keyBindings = userSettings.keyBindings;
        let mouseBindings = userSettings.mouseBindings;
        let activeKeyCapture = null;
        let activeMouseCapture = null;
        let suppressMouseCaptureFollowupButton = null;
        const heldSettingsVirtualKeys = new Map();
        const heldSettingsVirtualMouseButtons = new Map();
        let activeModalId = null;
        let previouslyFocusedElement = null;
        let rankTransitionTimers = [];
        let rankTransitionRunId = 0;

        // Particle System
        let fxCtx = null;
        let fxCanvas = null;
        let fxParticles = [];
        let fxAnimationFrame = null;
        let rovingCellId = 'cell-0-0';
        let longPressTimer = null;
        let longPressPointerId = null;
        let longPressCellId = null;
        let longPressOrigin = null;
        let suppressedTouchCell = null;
        let suppressedTouchUntil = 0;

        function loadGameData() {
            const saved = readStorage(STORAGE_KEYS.game);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) gameState = { ...gameState, ...parsed };
                } catch (error) {}
            }
            delete gameState.inventory;
            delete gameState.unlockedThemes;
            gameState.username = typeof gameState.username === 'string' ? gameState.username.trim().slice(0, 16) : '';
            gameState.hasSeenTutorial = Boolean(gameState.hasSeenTutorial);
            const savedStats = gameState.stats && typeof gameState.stats === 'object' && !Array.isArray(gameState.stats) ? gameState.stats : {};
            const validCount = (value, fallback = 0) => Number.isSafeInteger(Number(value)) && Number(value) >= 0 ? Number(value) : fallback;
            const modeNames = ['classic', 'ranked', 'custom', 'daily'];
            const savedModes = savedStats.modes && typeof savedStats.modes === 'object' && !Array.isArray(savedStats.modes) ? savedStats.modes : {};
            gameState.stats = {
                gamesPlayed: validCount(savedStats.gamesPlayed),
                wins: validCount(savedStats.wins),
                bestTime: savedStats.bestTime == null ? null : validCount(savedStats.bestTime, null),
                revealedCells: validCount(savedStats.revealedCells),
                totalTime: validCount(savedStats.totalTime),
                timedGames: validCount(savedStats.timedGames),
                modes: Object.fromEntries(modeNames.map(mode => {
                    const savedMode = savedModes[mode] && typeof savedModes[mode] === 'object' ? savedModes[mode] : {};
                    const played = validCount(savedMode.played);
                    return [mode, { played, wins: Math.min(played, validCount(savedMode.wins)) }];
                })),
                records: {}
            };
            gameState.stats.wins = Math.min(gameState.stats.gamesPlayed, gameState.stats.wins);
            const savedRecords = savedStats.records && typeof savedStats.records === 'object' && !Array.isArray(savedStats.records)
                ? Object.entries(savedStats.records) : [];
            gameState.stats.records = Object.fromEntries(savedRecords.filter(([key, value]) =>
                typeof key === 'string' && Number.isSafeInteger(Number(value)) && Number(value) >= 0
            ).map(([key, value]) => [key, Number(value)]));
            const savedTier = Number(gameState.rankedTier);
            gameState.rankedTier = Number.isInteger(savedTier) ? Math.max(0, Math.min(RANKS.length - 1, savedTier)) : 0;
            delete gameState.placementMatchesDone;
            delete gameState.placementWins;
            delete gameState.placementCurrent;
        }

        function saveGameData() {
            writeStorage(STORAGE_KEYS.game, JSON.stringify(gameState));
        }

        window.addEventListener('DOMContentLoaded', () => {
            loadGameData();
            updateSettingsUI();
            normalizeTheme();
            applySiteTheme(gameState.themeId);
            applySurfaceTheme(gameState.surfaceThemeId);
            applyGridTheme(gameState.gridThemeId);
            initFxCanvas();
            initBoardInteractions();
            document.getElementById('screenSettings').addEventListener('click', (event) => {
                if (!activeKeyCapture) return;
                const target = event.target instanceof Element ? event.target : null;
                if (!target?.closest('#bindRevealButton, #bindFlagButton, #bindRestartButton, #bindMouseRevealButton, #bindMouseFlagButton, #bindMouseRestartButton')) cancelKeyCapture();
            });
            document.querySelector('#screenSettings section[aria-labelledby="settingsControlsTitle"]')
                ?.addEventListener('contextmenu', (event) => event.preventDefault());

            if (gameState.username) showMenuScreen();
            else showUsernameScreen();

            const refreshBoardLayout = () => {
                if (!document.getElementById('screenGame').classList.contains('hidden')) {
                    requestAnimationFrame(() => {
                        adjustTileSize();
                        resizeFxCanvas();
                    });
                }
            };
            window.addEventListener('resize', refreshBoardLayout);
            window.addEventListener('orientationchange', refreshBoardLayout);
            if (window.visualViewport) window.visualViewport.addEventListener('resize', refreshBoardLayout);
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden && timerInterval) updateGameTimer();
            });
        });

        // Haptic Feedback
        function triggerVibration(pattern) {
            if (navigator.vibrate) {
                try { navigator.vibrate(pattern); } catch(e) {}
            }
        }

        // Particle FX
        function initFxCanvas() {
            fxCanvas = document.getElementById('fxCanvas');
            if (fxCanvas) {
                fxCtx = fxCanvas.getContext('2d');
                resizeFxCanvas();
            }
        }

        function resizeFxCanvas() {
            const wrapper = document.getElementById('boardWrapper');
            if (fxCanvas && wrapper) {
                fxCanvas.width = wrapper.scrollWidth;
                fxCanvas.height = wrapper.scrollHeight;
            }
        }

        function spawnTileParticles(tileEl, color = '#00f3ff', count = 5) {
            if (!fxCanvas || !tileEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const rect = tileEl.getBoundingClientRect();
            const wrapperRect = document.getElementById('boardWrapper').getBoundingClientRect();
            const centerX = (rect.left - wrapperRect.left) + rect.width / 2;
            const centerY = (rect.top - wrapperRect.top) + rect.height / 2;

            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 2.2 + 0.4;
                fxParticles.push({
                    x: centerX,
                    y: centerY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    size: Math.random() * 2.2 + 1.1,
                    color: color,
                    alpha: 1,
                    decay: Math.random() * 0.045 + 0.035
                });
            }
            if (fxAnimationFrame === null) fxAnimationFrame = requestAnimationFrame(updateFxParticles);
        }

        function updateFxParticles() {
            fxAnimationFrame = null;
            if (!fxCtx) return;
            fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);

            for (let i = fxParticles.length - 1; i >= 0; i--) {
                const p = fxParticles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= p.decay;

                if (p.alpha <= 0) {
                    fxParticles.splice(i, 1);
                    continue;
                }

                fxCtx.save();
                fxCtx.globalAlpha = p.alpha;
                fxCtx.fillStyle = p.color;
                fxCtx.shadowColor = p.color;
                fxCtx.shadowBlur = 4;
                fxCtx.beginPath();
                fxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                fxCtx.fill();
                fxCtx.restore();
            }
            if (fxParticles.length) fxAnimationFrame = requestAnimationFrame(updateFxParticles);
        }

        // Audio System
        let audioCtx = null;
        function getAudioContext() {
            if (!audioCtx) {
                const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
                if (AudioCtxClass) audioCtx = new AudioCtxClass();
            }
            if (audioCtx && audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            return audioCtx;
        }

        function playHoverSound() {
            if (!audioEnabled || audioVolume <= 0) return;
            try {
                const ctx = getAudioContext(); if (!ctx) return;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.03);
                gain.gain.setValueAtTime(0.04 * audioVolume, ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.001 * audioVolume, ctx.currentTime + 0.03);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.03);
            } catch(e) {}
        }

        function playSound(type) {
            if (!audioEnabled || audioVolume <= 0) return;
            try {
                const ctx = getAudioContext(); if (!ctx) return;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination);
                const now = ctx.currentTime;

                if (type === 'click') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(400, now);
                    osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);
                    gain.gain.setValueAtTime(0.08 * audioVolume, now);
                    gain.gain.linearRampToValueAtTime(0.005 * audioVolume, now + 0.05);
                    osc.start(now); osc.stop(now + 0.05);
                } else if (type === 'flag') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(300, now);
                    osc.frequency.exponentialRampToValueAtTime(600, now + 0.08);
                    gain.gain.setValueAtTime(0.08 * audioVolume, now);
                    gain.gain.linearRampToValueAtTime(0.005 * audioVolume, now + 0.08);
                    osc.start(now); osc.stop(now + 0.08);
                } else if (type === 'explode') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(110, now);
                    osc.frequency.exponentialRampToValueAtTime(45, now + 0.35);
                    gain.gain.setValueAtTime(0.08 * audioVolume, now);
                    gain.gain.linearRampToValueAtTime(0.001 * audioVolume, now + 0.35);
                    osc.start(now); osc.stop(now + 0.35);
                } else if (type === 'win') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(523, now);
                    osc.frequency.setValueAtTime(659, now + 0.08);
                    osc.frequency.setValueAtTime(783, now + 0.16);
                    gain.gain.setValueAtTime(0.12 * audioVolume, now);
                    gain.gain.linearRampToValueAtTime(0.005 * audioVolume, now + 0.3);
                    osc.start(now); osc.stop(now + 0.3);
                }
            } catch(e) {}
        }

        // Screens Navigation
        const APP_SCREEN_IDS = [
            'screenUsername', 'screenMenu', 'screenGame',
            'screenAppearance', 'screenStats', 'screenSettings'
        ];

        function finishPendingScreenExit() {
            if (!pendingScreenExit) return;
            const exit = pendingScreenExit;
            pendingScreenExit = null;
            clearTimeout(exit.timer);
            exit.element.removeEventListener('animationend', exit.onAnimationEnd);
            exit.element.classList.add('hidden');
            exit.element.classList.remove('screen-transition-exit');
            if (exit.originalStyle === null) exit.element.removeAttribute('style');
            else exit.element.setAttribute('style', exit.originalStyle);
            if (exit.originalAriaHidden === null) exit.element.removeAttribute('aria-hidden');
            else exit.element.setAttribute('aria-hidden', exit.originalAriaHidden);
            exit.element.inert = exit.originalInert;
            exit.updateScreen?.();
        }

        function transitionToScreen(targetId, updateScreen) {
            finishPendingScreenExit();
            const currentScreen = APP_SCREEN_IDS
                .map(id => document.getElementById(id))
                .find(screen => screen && !screen.classList.contains('hidden'));
            const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
            if (!currentScreen || currentScreen.id === targetId || reduceMotion) {
                updateScreen();
                return;
            }

            const rect = currentScreen.getBoundingClientRect();
            if (!rect.width || !rect.height) {
                updateScreen();
                return;
            }

            const exit = {
                element: currentScreen,
                originalStyle: currentScreen.getAttribute('style'),
                originalAriaHidden: currentScreen.getAttribute('aria-hidden'),
                originalInert: currentScreen.inert,
                updateScreen,
                timer: null,
                onAnimationEnd: null
            };
            Object.assign(currentScreen.style, {
                position: 'fixed',
                top: rect.top + 'px',
                left: rect.left + 'px',
                width: rect.width + 'px',
                height: rect.height + 'px',
                margin: '0',
                zIndex: '2',
                pointerEvents: 'none'
            });
            currentScreen.inert = true;
            currentScreen.setAttribute('aria-hidden', 'true');
            currentScreen.classList.add('screen-transition-exit');
            pendingScreenExit = exit;

            exit.onAnimationEnd = event => {
                if (event.target === currentScreen && event.animationName === 'screen-exit') finishPendingScreenExit();
            };
            currentScreen.addEventListener('animationend', exit.onAnimationEnd);
            exit.timer = setTimeout(finishPendingScreenExit, 160);
        }

        function handleLogoClick() {
            if (gameState.username) returnToMenu();
        }

        function showUsernameScreen() {
            cancelRankTransition();
            transitionToScreen('screenUsername', () => {
                document.getElementById('appHeader').classList.add('hidden');
                closeAllModals();
                document.body.classList.remove('appearance-active', 'stats-active', 'settings-active', 'page-active');
                pageReturnScreenId = null;
                document.getElementById('screenAppearance').classList.add('hidden');
                document.getElementById('screenStats').classList.add('hidden');
                document.getElementById('screenSettings').classList.add('hidden');
                document.getElementById('screenUsername').classList.remove('hidden');
                document.getElementById('screenMenu').classList.add('hidden');
                document.getElementById('screenGame').classList.add('hidden');
                document.getElementById('playerBadge').classList.add('hidden');
                document.getElementById('logoutHeaderButton').classList.add('hidden');
            });
        }

        function showMenuScreen() {
            cancelRankTransition();
            transitionToScreen('screenMenu', () => {
                document.getElementById('appHeader').classList.remove('hidden');
                closeAllModals();
                document.body.classList.remove('appearance-active', 'stats-active', 'settings-active', 'page-active');
                pageReturnScreenId = null;
                document.getElementById('screenAppearance').classList.add('hidden');
                document.getElementById('screenStats').classList.add('hidden');
                document.getElementById('screenSettings').classList.add('hidden');
                document.getElementById('screenUsername').classList.add('hidden');
                document.getElementById('screenMenu').classList.remove('hidden');
                document.getElementById('screenGame').classList.add('hidden');
                document.getElementById('playerBadge').classList.remove('hidden');
                document.getElementById('logoutHeaderButton').classList.remove('hidden');
                document.getElementById('displayUsername').textContent = gameState.username;
                updateHeaderDisplay();
                document.getElementById('classicModeButton')?.focus({ preventScroll: true });
            });
        }

        function showGameScreen() {
            animateNextBoardRefresh = !document.getElementById('screenGame').classList.contains('hidden');
            transitionToScreen('screenGame', () => {
                document.getElementById('appHeader').classList.remove('hidden');
                closeAllModals();
                document.body.classList.remove('appearance-active', 'stats-active', 'settings-active', 'page-active');
                pageReturnScreenId = null;
                document.getElementById('screenAppearance').classList.add('hidden');
                document.getElementById('screenStats').classList.add('hidden');
                document.getElementById('screenSettings').classList.add('hidden');
                document.getElementById('screenUsername').classList.add('hidden');
                document.getElementById('screenMenu').classList.add('hidden');
                document.getElementById('screenGame').classList.remove('hidden');
                const choosingClassicGrid = currentMode === 'classic' && !classicGridChosen;
                document.getElementById('screenGame').classList.toggle('grid-selection-active', choosingClassicGrid);
                document.getElementById('changeClassicGridButton').classList.toggle('hidden',
                    !(currentMode === 'classic' && classicGridChosen) && currentMode !== 'custom');
                updateLogicalModeButton();
                document.getElementById('playerBadge').classList.remove('hidden');
                document.getElementById('logoutHeaderButton').classList.remove('hidden');
                if (!gameState.hasSeenTutorial && !choosingClassicGrid) openModal('helpModal');
                requestAnimationFrame(() => {
                    adjustTileSize();
                    resizeFxCanvas();
                    if (choosingClassicGrid) {
                        document.querySelector('#classicGridChoices [data-classic-difficulty]')?.focus({ preventScroll: true });
                    } else if (!activeModalId) {
                        document.getElementById(rovingCellId)?.focus({ preventScroll: true });
                    }
                });
            });
        }

        function closeAllModals() {
            document.querySelectorAll('[id$="Modal"]').forEach(el => {
                clearTimeout(el._modalCloseTimer);
                if (el._modalTransitionEnd) el.removeEventListener('transitionend', el._modalTransitionEnd);
                el._modalCloseTimer = null;
                el._modalTransitionEnd = null;
                el.classList.add('hidden');
                el.classList.remove('modal-visible', 'modal-closing');
                el.inert = false;
                el.removeAttribute('aria-hidden');
            });
            activeModalId = null;
            previouslyFocusedElement = null;
            activeKeyCapture = null;
            activeMouseCapture = null;
        }

        function updateHeaderDisplay() {
            const currentRank = RANKS[gameState.rankedTier];
            const currentBadge = RANK_BADGES.find(item => currentRank.name.startsWith(item.prefix)) || RANK_BADGES[0];
            const rankedButton = document.getElementById('rankedMatchButton');
            rankedButton.style.setProperty('--rank-ink', currentBadge.ink);
            rankedButton.style.setProperty('--rank-glow', currentBadge.glow);
            document.getElementById('displayRank').textContent = currentRank.name;
            const desc = document.getElementById('rankedMenuDesc');
            if (gameState.rankedTier === RANKS.length - 1) {
                desc.textContent = `Rang local · ${currentRank.name} · records à battre`;
            } else {
                const deadline = Math.floor(currentRank.timeLimit / 60) + ':' + String(currentRank.timeLimit % 60).padStart(2, '0');
                desc.textContent = `Rang local · ${currentRank.name} · ${deadline} pour monter`;
            }
        }

        document.getElementById('usernameForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const val = document.getElementById('usernameInput').value.trim();
            if (!val) return;
            gameState.username = val;
            saveGameData();
            const submitButton = document.querySelector('#usernameForm button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = 'On prépare la partie <i class="fa-solid fa-arrow-right ml-2"></i>';
            showMenuScreen();
        });

        function logoutAccount() {
            Object.values(STORAGE_KEYS).forEach(removeStorage);
            location.reload();
        }

        // Game Initializers
        function transitionGridView(outgoingElements, onComplete) {
            const gameScreen = document.getElementById('screenGame');
            if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
                onComplete();
                return;
            }

            const previousInertStates = outgoingElements.map(element => element.inert);
            outgoingElements.forEach(element => {
                element.inert = true;
                element.classList.remove('grid-view-enter');
                element.classList.add('grid-view-exit');
            });
            setTimeout(() => {
                const navigationStarted = gameScreen.classList.contains('hidden') ||
                    gameScreen.classList.contains('screen-transition-exit');
                outgoingElements.forEach((element, index) => {
                    element.inert = previousInertStates[index];
                    element.classList.remove('grid-view-exit');
                });
                if (!navigationStarted) onComplete();
            }, 120);
        }

        function showClassicGridSelection() {
            if (currentMode === 'custom') {
                openModal('customModal');
                return;
            }
            if (currentMode !== 'classic') return;
            boardGenerationId++;
            isGeneratingBoard = false;
            stopTimer();
            gameTimerPaused = false;

            const gameScreen = document.getElementById('screenGame');
            const gameHud = document.getElementById('gameHud');
            const gameRankInfo = document.getElementById('gameRankInfo');
            const gameStats = gameHud.children[1];
            const gameOnlyControls = Array.from(gameHud.querySelectorAll(':scope > div:nth-child(3) > button:not(#helpButton):not(.hidden)'));
            const boardWrapper = document.getElementById('boardWrapper');
            const generationStatus = document.getElementById('logicGenerationStatus');
            const choices = document.getElementById('classicGridSelection');
            const lossRestartButton = document.getElementById('lossRestartButton');
            const wasPlayingOnBoard = !gameScreen.classList.contains('hidden') &&
                !gameScreen.classList.contains('grid-selection-active') &&
                !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

            const enterSelection = animate => {
                classicGridChosen = false;
                generationStatus.classList.add('hidden');
                document.getElementById('gameModeTitle').textContent = 'Mode Classique';
                gameRankInfo.textContent = 'Choisis une grille';
                document.getElementById('minesCountDisplay').textContent = '';
                document.getElementById('timerDisplay').textContent = '';
                gameHud.classList.remove('game-ended', 'game-lost', 'game-won');
                lossRestartButton.classList.add('hidden');
                showGameScreen();

                if (animate) {
                    gameRankInfo.classList.remove('grid-view-enter');
                    choices.classList.remove('grid-view-enter');
                    void choices.offsetWidth;
                    gameRankInfo.classList.add('grid-view-enter');
                    choices.classList.add('grid-view-enter');
                }
                document.querySelector('#classicGridChoices [data-classic-difficulty]')?.focus({ preventScroll: true });
            };

            if (!wasPlayingOnBoard) {
                enterSelection(false);
                return;
            }

            transitionGridView([
                gameRankInfo,
                gameStats,
                ...gameOnlyControls,
                ...(lossRestartButton.classList.contains('hidden') ? [] : [lossRestartButton]),
                boardWrapper,
                generationStatus
            ], () => enterSelection(true));
        }

        function selectClassicDifficulty(difficulty) {
            const gameScreen = document.getElementById('screenGame');
            if (gameScreen.classList.contains('grid-selection-active') && !gameScreen.classList.contains('hidden')) {
                const gameRankInfo = document.getElementById('gameRankInfo');
                const choices = document.getElementById('classicGridSelection');
                transitionGridView([gameRankInfo, choices], () => {
                    nextBoardRefreshMotion = 'grid';
                    startGameMode('classic', difficulty);
                });
                return;
            }
            startGameMode('classic', difficulty);
        }

        function toggleLogicalMode() {
            if (currentMode !== 'classic' || gameStarted || isGeneratingBoard) return;
            logicalModeEnabled = !logicalModeEnabled;
            writeStorage(STORAGE_KEYS.logicalMode, String(logicalModeEnabled));
            updateLogicalModeButton();
        }

        function updateLogicalModeButton() {
            const button = document.getElementById('logicalModeToggle');
            if (!button) return;
            button.classList.toggle('hidden', currentMode !== 'classic');
            button.disabled = currentMode !== 'classic' || gameStarted || isGeneratingBoard;
            button.classList.toggle('opacity-40', button.disabled);
            button.classList.toggle('cursor-not-allowed', button.disabled);
            document.getElementById('gameHud').classList.toggle('logical-mode-active', logicalModeEnabled && currentMode === 'classic');
            const action = logicalModeEnabled ? 'Désactiver' : 'Activer';
            button.title = `${action} le mode logique`;
            button.setAttribute('aria-label', `${action} le mode logique`);
            button.setAttribute('aria-pressed', String(logicalModeEnabled));
            button.classList.toggle('text-slate-300', !logicalModeEnabled);
            button.classList.toggle('text-cyan-300', logicalModeEnabled);
            button.classList.toggle('border-cyan-400', logicalModeEnabled);
            button.classList.toggle('bg-cyan-500/10', logicalModeEnabled);
        }

        function startGameMode(mode, difficulty = null) {
            currentMode = mode;
            if (mode === 'classic') {
                const presets = {
                    easy: { label: 'Facile', cols: 9, rows: 9, mines: 10 },
                    logic: { label: 'Intermédiaire', cols: 12, rows: 10, mines: 15 },
                    standard: { label: 'Standard', cols: 16, rows: 16, mines: 40 },
                    expert: { label: 'Expert', cols: 30, rows: 16, mines: 99 }
                };
                if (!presets[difficulty]) {
                    showClassicGridSelection();
                    return;
                }
                classicGridChosen = true;
                classicDifficulty = difficulty;
                writeStorage(STORAGE_KEYS.classicDifficulty, classicDifficulty);
                const preset = presets[classicDifficulty];
                boardCols = preset.cols; boardRows = preset.rows; mineCount = preset.mines; timeLimitSec = 240;
                document.getElementById('gameModeTitle').textContent = "Mode Classique";
                document.getElementById('gameRankInfo').textContent = `Difficulté ${preset.label} (${preset.cols}×${preset.rows} · ${preset.mines} mines)`;
                document.querySelectorAll('[data-classic-difficulty]').forEach(button => {
                    const selected = button.dataset.classicDifficulty === classicDifficulty;
                    button.classList.toggle('ring-2', selected);
                    button.classList.toggle('ring-cyan-400', selected);
                    button.setAttribute('aria-pressed', String(selected));
                });
            } else classicGridChosen = false;
            showGameScreen();
            initNewGame();
        }

        function startDailyChallenge() {
            currentMode = 'daily';
            classicGridChosen = false;
            activeDailyDateKey = getDailyDateKey();
            boardCols = 12;
            boardRows = 10;
            mineCount = 20;
            timeLimitSec = 180;
            document.getElementById('gameModeTitle').textContent = 'Défi du jour';
            document.getElementById('gameRankInfo').textContent = 'Même grille pour tous · commence dans la zone centrale';
            showGameScreen();
            initNewGame();
        }

        function startRankedMatch() {
            currentMode = 'ranked';
            classicGridChosen = false;
            const rank = RANKS[gameState.rankedTier];
            boardCols = rank.cols;
            boardRows = rank.rows;
            mineCount = rank.mines;
            timeLimitSec = rank.timeLimit;
            document.getElementById('gameModeTitle').textContent = `Classé · ${rank.name}`;
            const rankInfo = `${rank.cols}×${rank.rows} · ${rank.mines} mines · ${rank.timeLimit}s max · nouvelle grille à chaque partie · premier clic sûr · sans devinette · défaite sans recul`;
            const rankInfoElement = document.getElementById('gameRankInfo');
            rankInfoElement.dataset.matchInfo = rankInfo;
            rankInfoElement.textContent = rankInfo;
            showGameScreen();
            initNewGame();
        }

        document.getElementById('customForm').addEventListener('submit', (e) => {
            e.preventDefault();
            currentMode = 'custom';
            classicGridChosen = false;
            boardCols = parseInt(document.getElementById('customCols').value);
            boardRows = parseInt(document.getElementById('customRows').value);
            mineCount = parseInt(document.getElementById('customMines').value);
            
            const maxAllowed = Math.min(Math.floor((boardCols * boardRows) * 0.7), boardCols * boardRows - 9);
            if (mineCount > maxAllowed) mineCount = maxAllowed;
            document.getElementById('customMinesVal').textContent = String(mineCount);

            document.getElementById('gameModeTitle').textContent = "Sur Mesure 🛠️";
            document.getElementById('gameRankInfo').textContent = `${boardCols}×${boardRows} • ${mineCount} mines`;

            closeModal('customModal');
            showGameScreen();
            initNewGame();
        });

        function returnToMenu() {
            boardGenerationId++;
            isGeneratingBoard = false;
            stopTimer();
            gameTimerPaused = false;
            closeAllModals();
            showMenuScreen();
        }

        function initNewGame() {
            const shouldAnimateBoard = animateNextBoardRefresh;
            const boardRefreshMotion = nextBoardRefreshMotion;
            animateNextBoardRefresh = false;
            nextBoardRefreshMotion = 'quick';
            boardGenerationId++;
            isGeneratingBoard = false;
            if (boardRefreshAnimationTimer !== null) clearTimeout(boardRefreshAnimationTimer);
            boardRefreshAnimationTimer = null;
            const boardWrapper = document.getElementById('boardWrapper');
            boardWrapper.classList.remove('board-refreshing', 'board-grid-enter');
            stopTimer();
            gameTimerPaused = false;
            gameOver = false;
            gameWon = false;
            gameStarted = false;
            timeElapsed = 0;
            flagMode = false;
            document.getElementById('boardWrapper').classList.remove('mine-impact');
            document.getElementById('gameHud').classList.remove('game-ended', 'game-lost', 'game-won');
            document.getElementById('lossRestartButton').classList.add('hidden');
            document.getElementById('lossCause').classList.remove('hidden');
            cancelRankTransition();
            document.getElementById('winCelebration').replaceChildren();
            document.getElementById('logicGenerationStatus').classList.add('hidden');
            const flagButton = document.getElementById('flagModeBtn');
            flagButton.classList.remove('border-amber-500', 'bg-amber-500/10');
            flagButton.setAttribute('aria-pressed', 'false');
            flagButton.setAttribute('aria-label', 'Activer le mode drapeau');
            flagButton.title = 'Activer le mode drapeau';
            flagsLeft = mineCount;
            document.getElementById('timerDisplay').textContent = "000";
            document.getElementById('minesCountDisplay').textContent = String(flagsLeft).padStart(2, '0');

            board = [];
            for (let r = 0; r < boardRows; r++) {
                let row = [];
                for (let c = 0; c < boardCols; c++) {
                    row.push({ mine: false, revealed: false, flagged: false, count: 0 });
                }
                board.push(row);
            }
            adjustTileSize();
            renderBoard();
            if (shouldAnimateBoard) {
                const gameHud = document.getElementById('gameHud');
                boardWrapper.classList.remove('board-refreshing', 'board-grid-enter');
                const hudElements = [
                    document.getElementById('gameRankInfo'),
                    gameHud.children[1],
                    ...Array.from(gameHud.querySelectorAll(':scope > div:nth-child(3) > button:not(#helpButton):not(.hidden)'))
                ];
                hudElements.forEach(element => element.classList.remove('grid-view-enter'));
                void boardWrapper.offsetWidth;
                if (boardRefreshMotion === 'grid') {
                    boardWrapper.classList.add('board-grid-enter');
                    hudElements.forEach(element => element.classList.add('grid-view-enter'));
                } else {
                    const centerR = (boardRows - 1) / 2;
                    const centerC = (boardCols - 1) / 2;
                    for (let r = 0; r < boardRows; r++) for (let c = 0; c < boardCols; c++) {
                        const tile = document.getElementById(`cell-${r}-${c}`);
                        const wave = Math.abs(r - centerR) + Math.abs(c - centerC);
                        tile?.style.setProperty('--board-refresh-delay', `${Math.round(Math.min(wave, 22) * 9)}ms`);
                    }
                    boardWrapper.classList.add('board-refreshing');
                    boardRefreshAnimationTimer = setTimeout(() => {
                        boardWrapper.classList.remove('board-refreshing');
                        boardRefreshAnimationTimer = null;
                    }, 650);
                }
            }
            if (!activeModalId) document.getElementById(rovingCellId)?.focus({ preventScroll: true });
            updateLogicalModeButton();
        }

        function adjustTileSize() {
            const wrapper = document.getElementById('boardWrapper');
            const arena = document.getElementById('screenGame');
            if (!wrapper || !arena || arena.classList.contains('hidden') || arena.classList.contains('grid-selection-active')) return;

            const viewportWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth;
            const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
            const header = document.getElementById('appHeader');
            const main = arena.closest('main');
            const hud = arena.firstElementChild;
            const boardElement = document.getElementById('gameBoard');
            const belowBoardElements = [document.getElementById('logicGenerationStatus')];
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            const hudHeight = hud ? hud.getBoundingClientRect().height : 0;
            const bodyStyle = getComputedStyle(document.body);
            const mainStyle = main ? getComputedStyle(main) : null;
            const wrapperStyle = getComputedStyle(wrapper);
            const boardStyle = getComputedStyle(boardElement);
            const outerWidth = Math.max(100, Math.min(arena.clientWidth, viewportWidth) - 16);
            const bodyVerticalPadding = parseFloat(bodyStyle.paddingTop) + parseFloat(bodyStyle.paddingBottom);
            const bodyGap = parseFloat(bodyStyle.rowGap) || 0;
            const mainVerticalPadding = mainStyle ? parseFloat(mainStyle.paddingTop) + parseFloat(mainStyle.paddingBottom) : 0;
            const hudBottomMargin = parseFloat(getComputedStyle(hud).marginBottom) || 0;
            const belowBoardHeight = belowBoardElements.reduce((total, element) => {
                if (!element || !element.getClientRects().length) return total;
                const style = getComputedStyle(element);
                return total + element.getBoundingClientRect().height + (parseFloat(style.marginTop) || 0) + (parseFloat(style.marginBottom) || 0);
            }, 0);
            const outerHeight = Math.max(100, viewportHeight - bodyVerticalPadding - bodyGap - headerHeight - mainVerticalPadding - hudHeight - hudBottomMargin - belowBoardHeight - 8);
            const wrapperHorizontalChrome = parseFloat(wrapperStyle.paddingLeft) + parseFloat(wrapperStyle.paddingRight) + parseFloat(wrapperStyle.borderLeftWidth) + parseFloat(wrapperStyle.borderRightWidth);
            const wrapperVerticalChrome = parseFloat(wrapperStyle.paddingTop) + parseFloat(wrapperStyle.paddingBottom) + parseFloat(wrapperStyle.borderTopWidth) + parseFloat(wrapperStyle.borderBottomWidth);
            const boardHorizontalChrome = parseFloat(boardStyle.paddingLeft) + parseFloat(boardStyle.paddingRight) + parseFloat(boardStyle.borderLeftWidth) + parseFloat(boardStyle.borderRightWidth);
            const boardVerticalChrome = parseFloat(boardStyle.paddingTop) + parseFloat(boardStyle.paddingBottom) + parseFloat(boardStyle.borderTopWidth) + parseFloat(boardStyle.borderBottomWidth);
            const gapX = parseFloat(boardStyle.columnGap) || 0;
            const gapY = parseFloat(boardStyle.rowGap) || 0;
            const tileWidth = (outerWidth - wrapperHorizontalChrome - boardHorizontalChrome - gapX * (boardCols - 1)) / boardCols;
            const tileHeight = (outerHeight - wrapperVerticalChrome - boardVerticalChrome - gapY * (boardRows - 1)) / boardRows;
            const calculatedSize = Math.max(4, Math.min(50, tileWidth, tileHeight));

            wrapper.style.width = 'fit-content';
            wrapper.style.maxWidth = outerWidth + 'px';
            wrapper.style.maxHeight = outerHeight + 'px';
            wrapper.style.overflow = 'hidden';
            boardElement.style.gridTemplateColumns = `repeat(${boardCols}, var(--tile-size))`;
            document.documentElement.style.setProperty('--tile-size', calculatedSize + 'px');
            requestAnimationFrame(resizeFxCanvas);
        }

        function nextSeededBoardRandom() {
            seededBoardRandomState = (seededBoardRandomState + 0x6D2B79F5) >>> 0;
            let value = seededBoardRandomState;
            value = Math.imul(value ^ (value >>> 15), value | 1);
            value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
            return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
        }

        function getDailyDateKey() {
            const parts = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit'
            }).formatToParts(new Date());
            const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
            return `${values.year}-${values.month}-${values.day}`;
        }

        function updateCustomMineLimit() {
            const cols = Number(document.getElementById('customCols').value);
            const rows = Number(document.getElementById('customRows').value);
            const mines = document.getElementById('customMines');
            const maximum = Math.min(Math.floor(cols * rows * 0.7), cols * rows - 9);
            mines.max = String(maximum);
            if (Number(mines.value) > maximum) mines.value = String(maximum);
            document.getElementById('customMinesVal').textContent = mines.value;
        }

        function seedBoardFromKey(seedKey) {
            let seed = 2166136261;
            for (let i = 0; i < seedKey.length; i++) seed = Math.imul(seed ^ seedKey.charCodeAt(i), 16777619);
            seededBoardRandomState = seed >>> 0 || 1;
        }

        function seedDailyBoard() {
            const dateKey = activeDailyDateKey || getDailyDateKey();
            seedBoardFromKey(dateKey);
        }

        function isBoardLogicallySolvable(firstR, firstC) {
            const inferredMines = new Set();
            const revealed = new Set();
            const cellId = (r, c) => r * boardCols + c;
            const reveal = (r, c) => {
                const stack = [[r, c]];
                while (stack.length) {
                    const [row, col] = stack.pop();
                    const id = cellId(row, col);
                    if (revealed.has(id) || inferredMines.has(id) || board[row][col].mine) continue;
                    revealed.add(id);
                    if (board[row][col].count === 0) {
                        for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
                            const nr = row + dr, nc = col + dc;
                            if (nr >= 0 && nr < boardRows && nc >= 0 && nc < boardCols) stack.push([nr, nc]);
                        }
                    }
                }
            };
            reveal(firstR, firstC);
            const safeTarget = boardCols * boardRows - mineCount;
            while (revealed.size < safeTarget) {
                const constraints = [];
                const unknownCells = [];
                for (const id of revealed) {
                    const r = Math.floor(id / boardCols), c = id % boardCols;
                    let remaining = board[r][c].count;
                    const hidden = new Set();
                    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
                        const nr = r + dr, nc = c + dc;
                        if (nr < 0 || nr >= boardRows || nc < 0 || nc >= boardCols) continue;
                        const neighborId = cellId(nr, nc);
                        if (inferredMines.has(neighborId)) remaining--;
                        else if (!revealed.has(neighborId)) hidden.add(neighborId);
                    }
                    if (hidden.size) constraints.push({ cells: hidden, remaining });
                }
                const safe = new Set(), mines = new Set();
                for (let id = 0; id < boardCols * boardRows; id++) {
                    if (!revealed.has(id) && !inferredMines.has(id)) unknownCells.push(id);
                }
                const remainingGlobalMines = mineCount - inferredMines.size;
                if (remainingGlobalMines === 0) for (const id of unknownCells) safe.add(id);
                if (remainingGlobalMines === unknownCells.length) for (const id of unknownCells) mines.add(id);
                for (const constraint of constraints) {
                    if (constraint.remaining === 0) for (const id of constraint.cells) safe.add(id);
                    if (constraint.remaining === constraint.cells.size) for (const id of constraint.cells) mines.add(id);
                }
                for (let i = 0; i < constraints.length; i++) for (let j = 0; j < constraints.length; j++) {
                    if (i === j) continue;
                    const a = constraints[i], b = constraints[j];
                    if (a.cells.size >= b.cells.size) continue;
                    let subset = true;
                    for (const id of a.cells) if (!b.cells.has(id)) { subset = false; break; }
                    if (!subset) continue;
                    const difference = new Set([...b.cells].filter(id => !a.cells.has(id)));
                    const count = b.remaining - a.remaining;
                    if (count === 0) for (const id of difference) safe.add(id);
                    if (count === difference.size) for (const id of difference) mines.add(id);
                }
                let progressed = false;
                for (const id of mines) if (!inferredMines.has(id)) { inferredMines.add(id); progressed = true; }
                for (const id of safe) if (!revealed.has(id) && !inferredMines.has(id)) {
                    if (board[Math.floor(id / boardCols)][id % boardCols].mine) return false;
                    reveal(Math.floor(id / boardCols), id % boardCols);
                    progressed = true;
                }
                if (!progressed) return false;
            }
            return true;
        }

        async function placeMines(firstR, firstC, generationId) {
            const random = currentMode === 'daily' ? nextSeededBoardRandom : Math.random;
            const boardCenter = { r: Math.floor(boardRows / 2), c: Math.floor(boardCols / 2) };
            if (currentMode === 'daily') seedDailyBoard();
            const fixedCenterStart = currentMode === 'daily';
            const safeR = fixedCenterStart ? boardCenter.r : firstR;
            const safeC = fixedCenterStart ? boardCenter.c : firstC;
            const useLogic = currentMode === 'ranked' || (logicalModeEnabled && currentMode === 'classic');
            let attempt = 0;
            while (generationId === boardGenerationId) {
                attempt++;
                for (const row of board) for (const cell of row) { cell.mine = false; cell.count = 0; }
                const candidates = [];
                for (let r = 0; r < boardRows; r++) for (let c = 0; c < boardCols; c++) {
                    if (Math.abs(r - safeR) <= 1 && Math.abs(c - safeC) <= 1) continue;
                    candidates.push({ r, c });
                }
                for (let i = candidates.length - 1; i > 0; i--) {
                    const j = Math.floor(random() * (i + 1));
                    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
                }
                for (let i = 0; i < mineCount && i < candidates.length; i++) {
                    const { r, c } = candidates[i];
                    board[r][c].mine = true;
                }
                for (let r = 0; r < boardRows; r++) for (let c = 0; c < boardCols; c++) {
                    if (board[r][c].mine) continue;
                    let minesNear = 0;
                    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < boardRows && nc >= 0 && nc < boardCols && board[nr][nc].mine) minesNear++;
                    }
                    board[r][c].count = minesNear;
                }
                const solverStartR = fixedCenterStart ? safeR : firstR;
                const solverStartC = fixedCenterStart ? safeC : firstC;
                if (!useLogic || isBoardLogicallySolvable(solverStartR, solverStartC)) return true;
                if (attempt % 5 === 0) {
                    const status = document.getElementById('logicGenerationStatus');
                    status.querySelector('span').textContent = `Préparation de la grille sans devinette… (${attempt} essais)`;
                }
                await new Promise(resolve => setTimeout(resolve, 0));
            }
            return false;
        }
        function updateGameTimer() {
            if (!timerInterval || gameOver) return;
            const elapsed = Math.floor((performance.now() - timerStartedAt) / 1000);
            const hasTimeLimit = currentMode === 'ranked' || currentMode === 'daily';
            const displayElapsed = hasTimeLimit ? Math.min(elapsed, timeLimitSec) : elapsed;
            if (displayElapsed !== timeElapsed) {
                timeElapsed = displayElapsed;
                document.getElementById('timerDisplay').textContent = String(timeElapsed).padStart(3, '0');
            }
            if (hasTimeLimit && elapsed >= timeLimitSec) {
                stopTimer();
                revealAllMines();
                endGame(false, "Temps Écoulé !");
            }
        }

        function startTimer() {
            if (timerInterval || gameOver) return;
            gameStarted = true;
            timerStartedAt = performance.now() - timeElapsed * 1000;
            updateLogicalModeButton();
            timerInterval = setInterval(updateGameTimer, 250);
            updateGameTimer();
        }

        function pauseGameTimer() {
            if (!timerInterval || gameOver) return false;
            updateGameTimer();
            if (!timerInterval || gameOver) return false;
            stopTimer();
            gameTimerPaused = true;
            return true;
        }

        function resumeGameTimer() {
            if (!gameTimerPaused || document.getElementById('screenGame').classList.contains('hidden')) return;
            gameTimerPaused = false;
            if (!gameOver) startTimer();
        }

        function stopTimer() {
            if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
        }

        function renderBoard() {
            const gb = document.getElementById('gameBoard');
            gb.style.gridTemplateColumns = `repeat(${boardCols}, var(--tile-size))`;
            const boardSize = `${boardRows}x${boardCols}`;
            if (gb.dataset.boardSize !== boardSize) {
                gb.replaceChildren();
                rovingCellId = 'cell-0-0';
                const fragment = document.createDocumentFragment();
                for (let r = 0; r < boardRows; r++) {
                    for (let c = 0; c < boardCols; c++) {
                        const cellEl = document.createElement('button');
                        cellEl.type = 'button';
                        cellEl.id = `cell-${r}-${c}`;
                        cellEl.dataset.row = String(r);
                        cellEl.dataset.col = String(c);
                        cellEl.className = 'tile tile-hidden';
                        cellEl.tabIndex = cellEl.id === rovingCellId ? 0 : -1;
                        fragment.appendChild(cellEl);
                    }
                }
                gb.appendChild(fragment);
                gb.dataset.boardSize = boardSize;
            }

            for (let r = 0; r < boardRows; r++) {
                for (let c = 0; c < boardCols; c++) {
                    const cellData = board[r][c];
                    const cellEl = document.getElementById(`cell-${r}-${c}`);
                    const classes = ['tile', cellData.revealed ? 'tile-revealed' : 'tile-hidden'];
                    if (currentMode === 'daily' && !gameStarted && !cellData.revealed &&
                        Math.abs(r - Math.floor(boardRows / 2)) <= 1 && Math.abs(c - Math.floor(boardCols / 2)) <= 1) {
                        classes.push('daily-safe-start');
                    }
                    if (cellData.justRevealed) {
                        classes.push('tile-pop');
                        cellEl.style.animationDelay = Math.min(cellData.revealWave || 0, 3) * 12 + 'ms';
                        cellData.justRevealed = false;
                    }
                    if (cellData.justFlagged) {
                        classes.push('flag-pop');
                        cellData.justFlagged = false;
                    }
                    if (cellData.revealed && cellData.mine) classes.push(gameWon ? 'mine-won' : 'bg-rose-500/20');
                    const className = classes.join(' ');
                    if (cellEl.className !== className) cellEl.className = className;
                    const tabIndex = cellEl.id === rovingCellId ? 0 : -1;
                    if (cellEl.tabIndex !== tabIndex) cellEl.tabIndex = tabIndex;
                    const accessibleState = cellData.flagged ? 'drapeau posé' :
                        cellData.revealed ? (cellData.mine ? 'mine' : cellData.count ? 'chiffre ' + cellData.count : 'vide') : 'cachée';
                    const accessibleLabel = 'Ligne ' + (r + 1) + ', colonne ' + (c + 1) + ', ' + accessibleState;
                    if (cellEl.getAttribute('aria-label') !== accessibleLabel) cellEl.setAttribute('aria-label', accessibleLabel);

                    let content = '';
                    if (cellData.revealed) {
                        if (cellData.mine) {
                            content = 'mine';
                        } else if (cellData.count > 0) {
                            content = String(cellData.count);
                        }
                    } else if (cellData.flagged) {
                        content = 'flag';
                    }
                    if (cellEl.dataset.content !== content) {
                        if (content === 'mine') cellEl.innerHTML = '<i class="fa-solid fa-bomb text-rose-500" aria-hidden="true"></i>';
                        else if (content === 'flag') cellEl.innerHTML = '<i class="fa-solid fa-flag text-amber-400" aria-hidden="true"></i>';
                        else cellEl.textContent = content;
                        cellEl.dataset.content = content;
                    }
                    const numberColor = cellData.revealed && !cellData.mine && cellData.count > 0 ? getNumberColor(cellData.count) : '';
                    if (cellEl.style.color !== numberColor) cellEl.style.color = numberColor;
                }
            }
        }

        function initBoardInteractions() {
            const gb = document.getElementById('gameBoard');
            const handledMouseButtons = new Set();
            const findCell = (event) => {
                const target = event.target instanceof Element ? event.target.closest('.tile') : null;
                return target && gb.contains(target) ? target : null;
            };
            const coordinates = (cell) => [Number(cell.dataset.row), Number(cell.dataset.col)];
            const performMouseAction = (button, event) => {
                const action = Object.keys(mouseBindings).find(name => mouseBindings[name] === button);
                if (!action) return;
                const cell = findCell(event);
                if (!cell) return;
                if (action === 'restart') {
                    restartGame();
                    return;
                }
                const [r, c] = coordinates(cell);
                if (action === 'reveal') handleCellClick(r, c);
                else if (action === 'flag') handleCellRightClick(r, c);
            };
            const setRovingCell = (cell, focus = false) => {
                if (!cell) return;
                const previous = document.getElementById(rovingCellId);
                if (previous && previous !== cell) previous.tabIndex = -1;
                rovingCellId = cell.id;
                cell.tabIndex = 0;
                if (focus && document.activeElement !== cell) cell.focus({ preventScroll: true });
            };
            const clearLongPress = () => {
                if (longPressTimer) clearTimeout(longPressTimer);
                longPressTimer = null;
                longPressPointerId = null;
                longPressCellId = null;
                longPressOrigin = null;
            };

            gb.addEventListener('pointerover', (event) => {
                if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
                const cell = findCell(event);
                if (cell) setRovingCell(cell, true);
            });

            gb.addEventListener('focusin', (event) => {
                const cell = findCell(event);
                if (cell) setRovingCell(cell);
            });

            gb.addEventListener('pointerdown', (event) => {
                if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
                handledMouseButtons.delete(event.button);
                const cell = findCell(event);
                if (!cell) return;
                const action = Object.keys(mouseBindings).find(name => mouseBindings[name] === event.button);
                if (!action) return;

                // Traiter l'action dès que le bouton est pressé, pendant que la case
                // est encore la cible. Le click/auxclick/contextmenu de relâchement
                // sera ignoré pour éviter de jouer l'action deux fois.
                handledMouseButtons.add(event.button);
                performMouseAction(event.button, event);
            });

            gb.addEventListener('click', (event) => {
                if (event.button !== 0) return;
                const isTouchClick = event.pointerType === 'touch' || event.sourceCapabilities?.firesTouchEvents;
                if (event.detail > 0 && !isTouchClick && handledMouseButtons.delete(event.button)) {
                    event.preventDefault();
                    return;
                }
                const cell = findCell(event);
                if (!cell) return;
                if (suppressedTouchCell === cell.id && performance.now() < suppressedTouchUntil) {
                    event.preventDefault();
                    suppressedTouchCell = null;
                    return;
                }
                if (isTouchClick) {
                    const [r, c] = coordinates(cell);
                    handleCellClick(r, c);
                    return;
                }
                // Garder l'activation synthétique (technologies d'assistance) qui
                // n'est précédée d'aucun pointerdown physique.
                if (event.detail === 0) performMouseAction(event.button, event);
            });

            gb.addEventListener('mousedown', (event) => {
                if (event.button !== 1 || !findCell(event)) return;
                event.preventDefault();
            });

            gb.addEventListener('auxclick', (event) => {
                if (!findCell(event)) return;
                event.preventDefault();
                if (handledMouseButtons.delete(event.button)) return;
                if (event.button === 1 && event.detail === 0) performMouseAction(event.button, event);
            });

            gb.addEventListener('contextmenu', (event) => {
                // Le menu du navigateur ne doit pas apparaître dans les espaces entre les cases.
                event.preventDefault();
                const cell = findCell(event);
                if (!cell) return;
                if (suppressedTouchCell === cell.id && performance.now() < suppressedTouchUntil) return;
                if (!handledMouseButtons.delete(2)) performMouseAction(2, event);
            });

            gb.addEventListener('keydown', (event) => {
                if (document.querySelector('[id$="Modal"].modal-closing')) {
                    event.preventDefault();
                    return;
                }
                const cell = findCell(event);
                if (!cell) return;
                const [r, c] = coordinates(cell);
                const action = hasShortcutModifier(event) ? null :
                    Object.keys(keyBindings).find(name => isControlBindingPressed(name, event)) || null;
                if (action) {
                    event.preventDefault();
                    if (!event.repeat && action === 'reveal') handleCellClick(r, c);
                    else if (!event.repeat && action === 'flag') handleCellRightClick(r, c);
                    else if (!event.repeat && action === 'restart') restartGame();
                    return;
                }
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    return;
                }
                const moves = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] };
                if (!moves[event.key]) return;
                event.preventDefault();
                const [dr, dc] = moves[event.key];
                const next = document.getElementById(`cell-${Math.max(0, Math.min(boardRows - 1, r + dr))}-${Math.max(0, Math.min(boardCols - 1, c + dc))}`);
                if (next) setRovingCell(next, true);
            });

            gb.addEventListener('pointerdown', (event) => {
                if (event.pointerType !== 'touch' || event.button !== 0) return;
                const cell = findCell(event);
                if (!cell) return;
                clearLongPress();
                longPressPointerId = event.pointerId;
                longPressCellId = cell.id;
                longPressOrigin = { x: event.clientX, y: event.clientY };
                longPressTimer = setTimeout(() => {
                    const target = document.getElementById(longPressCellId);
                    if (!target) return;
                    const [r, c] = coordinates(target);
                    suppressedTouchCell = target.id;
                    suppressedTouchUntil = performance.now() + 1000;
                    handleCellRightClick(r, c);
                    triggerVibration(40);
                    longPressTimer = null;
                }, 420);
            }, { passive: true });

            document.addEventListener('pointerup', (event) => {
                if (event.pointerId === longPressPointerId) clearLongPress();
            });
            document.addEventListener('pointercancel', (event) => {
                if (event.pointerId === longPressPointerId) clearLongPress();
            });
            document.addEventListener('pointermove', (event) => {
                if (event.pointerId !== longPressPointerId || !longPressOrigin) return;
                if (Math.hypot(event.clientX - longPressOrigin.x, event.clientY - longPressOrigin.y) > 12) clearLongPress();
            }, { passive: true });
        }

        function getNumberColor(num) {
            const colors = { 1: '#397eae', 2: '#438467', 3: '#c45454', 4: '#8066a5', 5: '#ba7445', 6: '#378e90', 7: '#ae668e', 8: '#637487' };
            return colors[num] || '#fff';
        }

        async function handleCellClick(r, c) {
            if (gameOver || isGeneratingBoard) return;
            if (currentMode === 'daily' && !gameStarted &&
                (Math.abs(r - Math.floor(boardRows / 2)) > 1 || Math.abs(c - Math.floor(boardCols / 2)) > 1)) {
                document.getElementById('gameRankInfo').textContent = 'Défi commun : commence dans la zone centrale lumineuse';
                return;
            }
            const cell = board[r][c];
            const isFirstReveal = !gameStarted;

            if (cell.revealed) {
                handleChording(r, c);
                return;
            }

            if (cell.flagged) return;

            if (flagMode) {
                handleCellRightClick(r, c);
                return;
            }

            if (!gameStarted) {
                if (currentMode === 'ranked') {
                    const rankInfo = document.getElementById('gameRankInfo').dataset.matchInfo;
                    if (rankInfo) document.getElementById('gameRankInfo').textContent = rankInfo;
                }
                isGeneratingBoard = true;
                const generationId = ++boardGenerationId;
                const status = document.getElementById('logicGenerationStatus');
                if (currentMode === 'ranked' || (logicalModeEnabled && currentMode === 'classic')) {
                    status.querySelector('span').textContent = currentMode === 'ranked'
                        ? 'Recherche d’une grille résoluble sans devinette…'
                        : 'Recherche d’une grille sans devinette…';
                    status.classList.remove('hidden');
                }
                updateLogicalModeButton();
                const generated = await placeMines(r, c, generationId);
                if (generationId !== boardGenerationId) return;
                isGeneratingBoard = false;
                status.classList.add('hidden');
                updateLogicalModeButton();
                if (!generated) return;
                startTimer();
            }

            const cellEl = document.getElementById(`cell-${r}-${c}`);
            if (cell.mine) {
                triggerVibration([100, 50, 100]);
                playSound('explode');
                if (cellEl) spawnTileParticles(cellEl, '#f43f5e', 12);

                revealAllMines();
                endGame(false, "Explosion !");
                return;
            }

            triggerVibration(20);
            playSound('click');
            if (cellEl) {
                const color = cell.count > 0 ? getNumberColor(cell.count) : '#00f3ff';
                spawnTileParticles(cellEl, color, cell.count > 0 ? 3 : 4);
            }

            revealCellArea(r, c, !isFirstReveal);
            renderBoard();
            checkWinCondition();
        }

        function handleChording(r, c) {
            const cell = board[r][c];
            if (!cell.revealed || cell.count === 0) return;

            let flaggedAround = 0;
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    let nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < boardRows && nc >= 0 && nc < boardCols) {
                        if (board[nr][nc].flagged) flaggedAround++;
                    }
                }
            }

            if (flaggedAround === cell.count) {
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        let nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < boardRows && nc >= 0 && nc < boardCols) {
                            const adj = board[nr][nc];
                            if (!adj.revealed && !adj.flagged) {
                                if (adj.mine) {
                                    playSound('explode');
                                    revealAllMines();
                                    endGame(false, "Explosion !");
                                    return;
                                }
                                revealCellArea(nr, nc);
                            }
                        }
                    }
                }
                playSound('click');
                renderBoard();
                checkWinCondition();
            }
        }

        function handleCellRightClick(r, c) {
            if (gameOver) return;
            const cell = board[r][c];
            if (cell.revealed) return;

            if (!cell.flagged && flagsLeft <= 0) return;
            cell.flagged = !cell.flagged;
            cell.justFlagged = cell.flagged;
            flagsLeft += cell.flagged ? -1 : 1;
            document.getElementById('minesCountDisplay').textContent = String(flagsLeft).padStart(2, '0');
            playSound('flag');
            triggerVibration(30);

            const cellEl = document.getElementById(`cell-${r}-${c}`);
            if (cellEl && cell.flagged) spawnTileParticles(cellEl, '#facc15', 4);
            renderBoard();
        }

        function revealCellArea(startR, startC, animate = true) {
            const start = board[startR]?.[startC];
            if (!start || start.revealed || start.flagged) return;

            const queue = [];
            const enqueue = (r, c, wave) => {
                const cell = board[r][c];
                if (cell.revealed || cell.flagged) return;
                cell.revealed = true;
                cell.justRevealed = animate;
                cell.revealWave = wave;
                queue.push({ r, c });
            };
            enqueue(startR, startC, 0);

            for (let index = 0; index < queue.length; index++) {
                const { r, c } = queue[index];
                const cell = board[r][c];
                if (cell.count !== 0 || cell.mine) continue;

                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        const nextR = r + dr;
                        const nextC = c + dc;
                        if (nextR < 0 || nextR >= boardRows || nextC < 0 || nextC >= boardCols) continue;
                        enqueue(nextR, nextC, (cell.revealWave || 0) + 1);
                    }
                }
            }
        }

        function revealAllMines() {
            for (let r = 0; r < boardRows; r++) {
                for (let c = 0; c < boardCols; c++) {
                    if (board[r][c].mine) board[r][c].revealed = true;
                }
            }
            renderBoard();
        }

        function playMineImpact() {
            const wrapper = document.getElementById('boardWrapper');
            if (!wrapper || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            wrapper.classList.remove('mine-impact');
            void wrapper.offsetWidth;
            wrapper.classList.add('mine-impact');
            wrapper.onanimationend = (event) => {
                if (event.target === wrapper && event.animationName === 'mine-impact') {
                    wrapper.classList.remove('mine-impact');
                    wrapper.onanimationend = null;
                }
            };
        }

        function toggleFlagMode() {
            if (gameOver) return;
            flagMode = !flagMode;
            const btn = document.getElementById('flagModeBtn');
            btn.setAttribute('aria-pressed', String(flagMode));
            const actionLabel = flagMode ? 'Désactiver le mode drapeau' : 'Activer le mode drapeau';
            btn.setAttribute('aria-label', actionLabel);
            btn.title = actionLabel;
            if (flagMode) {
                btn.classList.add('border-amber-500', 'bg-amber-500/10');
            } else {
                btn.classList.remove('border-amber-500', 'bg-amber-500/10');
            }
        }

        function checkWinCondition() {
            let won = true;
            for (let r = 0; r < boardRows; r++) {
                for (let c = 0; c < boardCols; c++) {
                    if (!board[r][c].mine && !board[r][c].revealed) { won = false; break; }
                }
                if (!won) break;
            }
            if (won) {
                playSound('win');
                endGame(true, "Secteur Sécurisé !");
            }
        }

        function endGame(won, titleMsg) {
            gameOver = true;
            gameWon = won;
            stopTimer();
            gameTimerPaused = false;
            if (won) revealAllMines();

            gameState.stats.gamesPlayed++;
            gameState.stats.totalTime += timeElapsed;
            gameState.stats.timedGames++;
            gameState.stats.revealedCells += board.reduce((total, row) => total + row.filter(cell => cell.revealed && !cell.mine).length, 0);
            const modeStats = gameState.stats.modes[currentMode] || (gameState.stats.modes[currentMode] = { played: 0, wins: 0 });
            modeStats.played++;
            if (won) {
                gameState.stats.wins++;
                modeStats.wins++;
                if (gameState.stats.bestTime == null || timeElapsed < gameState.stats.bestTime) {
                    gameState.stats.bestTime = timeElapsed;
                }
                const recordKey = currentMode === 'daily'
                    ? `daily:${activeDailyDateKey || getDailyDateKey()}:${boardCols}x${boardRows}:${mineCount}`
                    : currentMode + ':' + boardCols + 'x' + boardRows + ':' + mineCount;
                const oldRecord = gameState.stats.records[recordKey];
                if (oldRecord == null || timeElapsed < oldRecord) gameState.stats.records[recordKey] = timeElapsed;
            }

            let rankChange = null;
            const activeRank = RANKS[gameState.rankedTier];
            if (currentMode === 'ranked' && won && timeElapsed < activeRank.timeLimit && gameState.rankedTier < RANKS.length - 1) {
                const previousRank = RANKS[gameState.rankedTier];
                gameState.rankedTier++;
                const nextRank = RANKS[gameState.rankedTier];
                rankChange = {
                    previous: previousRank.name,
                    next: nextRank.name,
                    tier: gameState.rankedTier
                };
            }

            saveGameData();
            if (!rankChange) updateHeaderDisplay();
            showEndGameBanner(won, titleMsg, rankChange);
        }

        function showEndGameBanner(won, titleMsg, rankChange = null) {
            const gameHud = document.getElementById('gameHud');
            const lossRestartButton = document.getElementById('lossRestartButton');
            closeAllModals();
            if (!won) playMineImpact();

            gameHud.classList.remove('game-lost', 'game-won');
            gameHud.classList.add('game-ended', won ? 'game-won' : 'game-lost');
            const lossCause = document.getElementById('lossCause');
            lossCause.classList.remove('hidden');
            lossCause.textContent = won && rankChange ? 'Promotion de rang' : titleMsg || (won ? 'Victoire !' : 'Partie terminée');
            document.getElementById('lossActionLabel').textContent = won ? 'REJOUER LA PARTIE' : 'RECOMMENCER LA PARTIE';
            document.getElementById('lossFinalTime').textContent = `${timeElapsed} s`;
            lossRestartButton.classList.remove('hidden');
            lossRestartButton.focus({ preventScroll: true });
            if (won && rankChange) startRankTransition(rankChange);
            else if (won) celebrateWin();
        }

        function cancelRankTransition() {
            rankTransitionRunId++;
            rankTransitionTimers.forEach(clearTimeout);
            rankTransitionTimers = [];
            const transition = document.getElementById('rankTransition');
            const wasVisible = transition && !transition.classList.contains('hidden');
            if (transition) {
                transition.classList.add('hidden');
                transition.classList.remove('is-active', 'is-leaving', 'is-arriving', 'is-exiting');
            }
            document.body.classList.remove('rank-transition-active');
            if (wasVisible) updateHeaderDisplay();
        }

        function startRankTransition(rankChange) {
            cancelRankTransition();
            const transition = document.getElementById('rankTransition');
            const currentEmblem = document.getElementById('rankTransitionCurrent');
            const nextEmblem = document.getElementById('rankTransitionNext');
            const runId = rankTransitionRunId;
            const tierNumber = rankChange.tier + 1;

            document.getElementById('rankTransitionCurrentName').textContent = rankChange.previous;
            document.getElementById('rankTransitionCurrentTier').textContent = `PALIER ${tierNumber - 1} / ${RANKS.length}`;
            document.getElementById('rankTransitionNextName').textContent = rankChange.next;
            document.getElementById('rankTransitionNextTier').textContent = `PALIER ${tierNumber} / ${RANKS.length}`;
            const setRankBadge = (emblem, rankName) => {
                const badge = RANK_BADGES.find(item => rankName.startsWith(item.prefix)) || RANK_BADGES[0];
                emblem.style.setProperty('--rank-glow', badge.glow);
                emblem.style.setProperty('--rank-ink', badge.ink);
                const icon = emblem.querySelector('.rank-transition-logo i');
                icon.className = `fa-solid ${badge.icon}`;
                return badge;
            };
            const currentBadge = setRankBadge(currentEmblem, rankChange.previous);
            const nextBadge = setRankBadge(nextEmblem, rankChange.next);
            transition.style.setProperty('--rank-transition-accent', `rgb(${currentBadge.glow})`);
            transition.classList.remove('is-active', 'is-leaving', 'is-arriving', 'is-exiting');
            currentEmblem.classList.remove('is-leaving');
            nextEmblem.classList.remove('is-arriving');
            document.body.classList.add('rank-transition-active');
            transition.classList.remove('hidden');
            transition.focus({ preventScroll: true });
            requestAnimationFrame(() => {
                if (runId === rankTransitionRunId) transition.classList.add('is-active');
            });

            const schedule = (delay, callback) => {
                const timer = setTimeout(() => {
                    rankTransitionTimers = rankTransitionTimers.filter(item => item !== timer);
                    if (runId === rankTransitionRunId) callback();
                }, delay);
                rankTransitionTimers.push(timer);
            };
            const finish = () => {
                transition.classList.add('is-exiting');
                schedule(360, () => {
                    transition.classList.add('hidden');
                    transition.classList.remove('is-active', 'is-leaving', 'is-arriving', 'is-exiting');
                    document.body.classList.remove('rank-transition-active');
                    rankTransitionRunId++;
                    rankTransitionTimers.forEach(clearTimeout);
                    rankTransitionTimers = [];
                    updateHeaderDisplay();
                    startRankedMatch();
                });
            };

            if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
                transition.style.setProperty('--rank-transition-accent', `rgb(${nextBadge.glow})`);
                schedule(80, () => {
                    currentEmblem.classList.add('is-leaving');
                    transition.classList.add('is-arriving');
                    nextEmblem.classList.add('is-arriving');
                });
                schedule(700, finish);
                return;
            }

            schedule(420, () => {
                currentEmblem.classList.add('is-leaving');
                transition.style.setProperty('--rank-transition-accent', `rgb(${nextBadge.glow})`);
                transition.classList.add('is-arriving');
                nextEmblem.classList.add('is-arriving');
            });
            schedule(2100, finish);
        }

        function celebrateWin() {
            const container = document.getElementById('winCelebration');
            if (!container || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

            const colors = ['#4ade80', '#86efac', '#a3e635', '#facc15', '#34d399', '#f0fdf4'];
            const pieces = Array.from({ length: 26 }, () => {
                const piece = document.createElement('span');
                piece.className = 'win-confetti-piece';
                piece.style.setProperty('--confetti-left', `${Math.random() * 100}%`);
                piece.style.setProperty('--confetti-color', colors[Math.floor(Math.random() * colors.length)]);
                piece.style.setProperty('--confetti-drift', `${Math.round(Math.random() * 180 - 90)}px`);
                piece.style.setProperty('--confetti-spin', `${Math.round(360 + Math.random() * 720)}deg`);
                piece.style.setProperty('--confetti-duration', `${(1.6 + Math.random() * .7).toFixed(2)}s`);
                piece.style.setProperty('--confetti-delay', `${(Math.random() * .16).toFixed(2)}s`);
                piece.addEventListener('animationend', () => piece.remove(), { once: true });
                return piece;
            });
            container.replaceChildren(...pieces);
        }

        function restartGame() {
            closeAllModals();
            if (currentMode === 'classic') startGameMode('classic', classicDifficulty);
            else if (currentMode === 'ranked') startRankedMatch();
            else { showGameScreen(); initNewGame(); }
        }

        function normalizeTheme() {
            const legacyThemeByColor = {
                blue: 'bleu', cyan: 'cyan', sage: 'vert', green: 'vert',
                yellow: 'jaune', orange: 'orange', red: 'rouge',
                pink: 'rose', purple: 'violet', black: 'noir', white: 'blanc'
            };
            const legacyThemeIds = {
                site: { 'red-orange': 'corail', 'yellow-orange': 'ambre', 'yellow-green': 'vert', 'blue-green': 'turquoise', 'blue-violet': 'indigo', 'red-violet': 'magenta', black: 'noir', white: 'blanc' },
                surface: { graphite: 'graphite', 'night-blue': 'nuit', forest: 'foret', plum: 'prune', earth: 'terre', slate: 'ardoise', obsidian: 'noir', snow: 'blanc' },
                grid: { steel: 'acier', ocean: 'ocean', violet: 'violet', forest: 'foret', amber: 'ambre', rose: 'rose', black: 'noir', white: 'blanc' }
            };
            const legacyColor = (gameState.cosmetics && (gameState.cosmetics.grid || gameState.cosmetics.background)) || gameState.currentTheme;
            gameState.themeId = legacyThemeIds.site[gameState.themeId] || gameState.themeId;
            gameState.surfaceThemeId = legacyThemeIds.surface[gameState.surfaceThemeId] || gameState.surfaceThemeId;
            gameState.gridThemeId = legacyThemeIds.grid[gameState.gridThemeId] || gameState.gridThemeId;
            if (gameState.themeId === 'turquoise' && gameState.surfaceThemeId === 'noir' && gameState.gridThemeId === 'turquoise') {
                gameState.themeId = 'bleu';
                gameState.surfaceThemeId = 'bleu';
                gameState.gridThemeId = 'bleu';
            }
            if (!SITE_THEMES.some(theme => theme.id === gameState.themeId)) gameState.themeId = legacyThemeByColor[legacyColor] || 'bleu';
            if (!SURFACE_THEMES.some(theme => theme.id === gameState.surfaceThemeId)) gameState.surfaceThemeId = 'bleu';
            if (!GRID_THEMES.some(theme => theme.id === gameState.gridThemeId)) gameState.gridThemeId = 'bleu';
            delete gameState.coins;
            delete gameState.cosmetics;
            delete gameState.unlockedCosmetics;
            delete gameState.currentTheme;
            saveGameData();
        }

        function applySiteTheme(themeId) {
            const theme = SITE_THEMES.find(item => item.id === themeId) || SITE_THEMES.find(item => item.id === 'bleu');
            const root = document.documentElement;
            root.style.setProperty('--theme-accent', theme.accent);
            root.style.setProperty('--theme-accent-rgb', theme.rgb);
            root.style.setProperty('--theme-accent-soft', 'rgba(' + theme.rgb + ', .13)');
            root.style.setProperty('--theme-accent-glow', 'rgba(' + theme.rgb + ', .22)');
            root.style.setProperty('--theme-ambient-rgb', theme.ambientRgb);
            root.style.setProperty('--page-bg', theme.page);
            root.style.setProperty('--page-bg-mid', theme.pageMid);
            root.style.setProperty('--page-bg-deep', theme.pageDeep);
            root.style.setProperty('--ink', theme.light ? '#202a36' : '#eff4f7');
            root.style.setProperty('--muted', theme.light ? '#596675' : '#91a1ae');
            document.body.dataset.theme = theme.id;
        }

        function applySurfaceTheme(themeId) {
            const theme = SURFACE_THEMES.find(item => item.id === themeId) || SURFACE_THEMES.find(item => item.id === 'bleu');
            const root = document.documentElement;
            root.style.setProperty('--surface', theme.base);
            root.style.setProperty('--surface-raised', theme.raised);
            root.style.setProperty('--surface-soft', theme.soft);
            root.style.setProperty('--surface-glow-rgb', theme.glowRgb);
            root.style.setProperty('--surface-ink', theme.ink || '#eff4f7');
            root.style.setProperty('--surface-muted', theme.muted || '#a0adba');
            root.style.setProperty('--surface-button-ink', theme.buttonInk || '#07120f');
            root.style.setProperty('--line', theme.line);
            document.body.dataset.surfaceTheme = theme.id;
        }

        function applyGridTheme(themeId) {
            const theme = GRID_THEMES.find(item => item.id === themeId) || GRID_THEMES.find(item => item.id === 'bleu');
            const root = document.documentElement;
            root.style.setProperty('--board-bg', theme.board);
            root.style.setProperty('--grid-tile-start', theme.tileStart);
            root.style.setProperty('--grid-tile-end', theme.tileEnd);
            root.style.setProperty('--grid-tile-hover', theme.tileHover);
            root.style.setProperty('--grid-revealed-bg', theme.revealed);
            root.style.setProperty('--grid-accent-rgb', theme.edgeRgb);
            root.style.setProperty('--grid-tile-ink', theme.tileInk || '#eff4f7');
            root.style.setProperty('--board-border', 'rgba(' + theme.edgeRgb + ', .38)');
            root.style.setProperty('--tile-outline', 'rgba(' + theme.edgeRgb + ', .2)');
            document.body.dataset.gridTheme = theme.id;
        }

        function renderShop() {
            const list = document.getElementById('shopThemeList');
            if (!list) return;
            const categories = {
                background: {
                    items: SITE_THEMES, stateKey: 'themeId', label: 'Fond',
                    swatch: theme => '--swatch:' + theme.accent + ';--swatch-rgb:' + theme.rgb + ';--swatch-page:' + theme.pageMid
                },
                blocks: {
                    items: SURFACE_THEMES, stateKey: 'surfaceThemeId', label: 'Blocs',
                    swatch: theme => '--swatch:' + theme.raised + ';--swatch-rgb:' + theme.glowRgb + ';--swatch-page:' + theme.base
                },
                grid: {
                    items: GRID_THEMES, stateKey: 'gridThemeId', label: 'Grille',
                    swatch: theme => '--swatch:' + theme.tileStart + ';--swatch-rgb:' + theme.edgeRgb + ';--swatch-page:' + theme.board
                }
            };
            const category = categories[activeShopCategory] || categories.background;
            document.querySelectorAll('[data-theme-category]').forEach(button => {
                const active = button.dataset.themeCategory === activeShopCategory;
                button.setAttribute('aria-pressed', String(active));
                button.classList.toggle('is-active', active);
                button.onclick = () => {
                    activeShopCategory = button.dataset.themeCategory;
                    renderShop();
                };
            });
            list.setAttribute('aria-label', 'Choix de couleur : ' + category.label);
            list.innerHTML = category.items.map(theme => {
                const selected = gameState[category.stateKey] === theme.id;
                return '<button type="button" class="theme-option' + (selected ? ' is-selected' : '') + '" data-theme-id="' + theme.id + '" aria-pressed="' + selected + '">' +
                    '<span class="theme-option-swatch" style="' + category.swatch(theme) + '"></span>' +
                    '<span class="theme-option-copy"><strong>' + theme.name + '</strong></span>' +
                    '<span class="theme-option-check" aria-hidden="true"><i class="fa-solid fa-check"></i></span></button>';
            }).join('');
            list.querySelectorAll('[data-theme-id]').forEach(button => {
                button.addEventListener('click', () => selectShopTheme(activeShopCategory, button.dataset.themeId));
            });
        }

        function selectShopTheme(category, themeId) {
            const categorySettings = {
                background: { items: SITE_THEMES, stateKey: 'themeId', apply: applySiteTheme },
                blocks: { items: SURFACE_THEMES, stateKey: 'surfaceThemeId', apply: applySurfaceTheme },
                grid: { items: GRID_THEMES, stateKey: 'gridThemeId', apply: applyGridTheme }
            }[category];
            if (!categorySettings || !categorySettings.items.some(theme => theme.id === themeId)) return;
            gameState[categorySettings.stateKey] = themeId;
            beginThemeTransition();
            categorySettings.apply(themeId);
            finishThemeTransition();
            saveGameData();
            renderShop();
            document.querySelector('#shopThemeList [data-theme-id="' + themeId + '"]')?.focus({ preventScroll: true });
            playSound('click');
        }

        function beginThemeTransition() {
            const root = document.documentElement;
            const backgroundLayer = document.getElementById('themeBackgroundTransition');
            const previousBackground = getComputedStyle(document.body).background;
            const previousTheme = getComputedStyle(root);

            clearTimeout(themeTransitionTimer);
            themeTransitionTimer = null;
            root.classList.add('theme-transitioning');
            if (backgroundLayer) {
                backgroundLayer.classList.remove('is-fading');
                backgroundLayer.style.background = previousBackground;
                backgroundLayer.replaceChildren();
                const ambientScene = document.querySelector('.ambient-scene');
                if (ambientScene) {
                    const previousAmbient = ambientScene.cloneNode(true);
                    ['--theme-accent-rgb', '--theme-ambient-rgb'].forEach(property => {
                        previousAmbient.style.setProperty(property, previousTheme.getPropertyValue(property).trim());
                    });
                    backgroundLayer.appendChild(previousAmbient);
                }
                backgroundLayer.classList.remove('hidden');
                void backgroundLayer.offsetWidth;
            }
            void root.offsetWidth;
        }

        function finishThemeTransition() {
            const root = document.documentElement;
            const backgroundLayer = document.getElementById('themeBackgroundTransition');
            backgroundLayer?.classList.add('is-fading');
            themeTransitionTimer = setTimeout(() => {
                root.classList.remove('theme-transitioning');
                if (backgroundLayer) {
                    backgroundLayer.classList.add('hidden');
                    backgroundLayer.classList.remove('is-fading');
                    backgroundLayer.style.removeProperty('background');
                    backgroundLayer.replaceChildren();
                }
                themeTransitionTimer = null;
            }, 190);
        }

        function openAppPage(pageId, activeClass, renderPage) {
            finishPendingScreenExit();
            const page = document.getElementById(pageId);
            if (!page) return;
            if (!page.classList.contains('hidden')) {
                renderPage();
                return;
            }

            const pageIds = ['screenAppearance', 'screenStats', 'screenSettings'];
            const pageControls = {
                screenAppearance: { button: 'appearanceBackButton' },
                screenStats: { button: 'statsBackButton' },
                screenSettings: { button: 'settingsBackButton' }
            }[pageId];
            if (!pageControls) return;
            const pageWasOpen = pageIds.some(id => !document.getElementById(id).classList.contains('hidden'));
            if (!pageWasOpen) {
                const currentScreen = ['screenGame', 'screenMenu', 'screenUsername']
                    .map(id => document.getElementById(id))
                    .find(screen => screen && !screen.classList.contains('hidden'));
                pageReturnScreenId = currentScreen ? currentScreen.id : (gameState.username ? 'screenMenu' : 'screenUsername');
            }
            if (pageReturnScreenId === 'screenGame') pauseGameTimer();
            transitionToScreen(pageId, () => {
                closeAllModals();
                ['screenUsername', 'screenMenu', 'screenGame', ...pageIds].forEach(id => {
                    document.getElementById(id).classList.add('hidden');
                });
                document.body.classList.add('page-active');
                ['appearance-active', 'stats-active', 'settings-active'].forEach(className => {
                    document.body.classList.toggle(className, activeClass === className);
                });
                page.classList.remove('hidden');
                document.querySelector('#' + pageControls.button + ' span').textContent = pageReturnScreenId === 'screenGame' ? 'Retour au jeu' : 'Retour au menu';
                renderPage();
                document.getElementById(pageControls.button).focus({ preventScroll: true });
            });
        }

        function closeAppPage(pageId) {
            const screenId = pageReturnScreenId || (gameState.username ? 'screenMenu' : 'screenUsername');
            transitionToScreen(screenId, () => {
                document.body.classList.remove('appearance-active', 'stats-active', 'settings-active', 'page-active');
                ['screenAppearance', 'screenStats', 'screenSettings'].forEach(id => document.getElementById(id).classList.add('hidden'));
                document.getElementById(screenId).classList.remove('hidden');
                pageReturnScreenId = null;
                if (screenId === 'screenGame') {
                    resumeGameTimer();
                    requestAnimationFrame(() => {
                        adjustTileSize();
                        resizeFxCanvas();
                        document.getElementById(rovingCellId)?.focus({ preventScroll: true });
                    });
                } else {
                    const triggerByPage = { screenAppearance: 'openShop', screenStats: 'openStatsPage', screenSettings: 'openSettingsPage' };
                    const trigger = triggerByPage[pageId];
                    document.querySelector('#appHeader button[onclick="' + trigger + '()"]')?.focus({ preventScroll: true });
                }
            });
        }

        function openShop() {
            cancelRankTransition();
            openAppPage('screenAppearance', 'appearance-active', renderShop);
        }

        function closeAppearanceSettings() {
            closeAppPage('screenAppearance');
        }

        function openStatsPage() {
            openAppPage('screenStats', 'stats-active', renderStatsPage);
        }

        function closeStatsPage() {
            closeAppPage('screenStats');
        }

        function openSettingsPage() {
            cancelRankTransition();
            activeKeyCapture = null;
            activeMouseCapture = null;
            openAppPage('screenSettings', 'settings-active', updateSettingsUI);
        }

        function closeSettingsPage() {
            activeKeyCapture = null;
            activeMouseCapture = null;
            closeAppPage('screenSettings');
        }

        function renderStatsPage() {
            const stats = gameState.stats;
            const gamesPlayed = stats.gamesPlayed;
            const wins = Math.min(gamesPlayed, stats.wins);
            const losses = Math.max(0, gamesPlayed - wins);
            const winRate = gamesPlayed ? Math.round((wins / gamesPlayed) * 100) : 0;
            const chart = document.getElementById('statsOutcomeChart');
            const winsArc = chart.querySelector('.stats-donut-wins');
            chart.dataset.hasGames = String(gamesPlayed > 0);
            winsArc.style.display = wins > 0 ? '' : 'none';
            winsArc.style.strokeDasharray = wins === gamesPlayed && gamesPlayed > 0
                ? 'none'
                : `${gamesPlayed ? (wins / gamesPlayed) * 100 : 0} ${gamesPlayed ? 100 - (wins / gamesPlayed) * 100 : 100}`;
            chart.setAttribute('aria-label', `${gamesPlayed} parties terminées : ${wins} victoires, ${losses} défaites, ${winRate} % de victoires`);
            document.getElementById('statsWinPercentage').textContent = `${winRate}%`;
            document.getElementById('statsGamesLegend').textContent = gamesPlayed.toLocaleString('fr-FR');
            document.getElementById('statsWinLegend').textContent = wins.toLocaleString('fr-FR');
            document.getElementById('statsLossLegend').textContent = losses.toLocaleString('fr-FR');

            const bestTime = stats.bestTime != null ? `${stats.bestTime} s` : '--';
            document.getElementById('statsBestTimeDetail').textContent = bestTime;
            const averageTime = stats.timedGames ? `${Math.round(stats.totalTime / stats.timedGames)} s` : '--';
            document.getElementById('statsAverageTime').textContent = averageTime;

            document.getElementById('statsCellsRevealed').textContent = stats.revealedCells.toLocaleString('fr-FR');

            const modeNames = { classic: 'Classique', ranked: 'Classée', custom: 'Sur mesure', daily: 'Défi du jour' };
            const modeList = document.getElementById('statsModeBreakdown');
            modeList.replaceChildren();
            const modeEntries = Object.entries(modeNames).map(([mode, label]) => ({
                mode,
                label,
                played: stats.modes[mode]?.played || 0,
                wins: stats.modes[mode]?.wins || 0
            }));
            const hasModeStats = modeEntries.some(entry => entry.played > 0);
            modeEntries.forEach(entry => {
                if (!entry.played) return;
                const rate = Math.round((entry.wins / entry.played) * 100);
                const row = document.createElement('div');
                row.className = 'stats-mode-row';
                const copy = document.createElement('div');
                copy.className = 'stats-mode-copy';
                const label = document.createElement('strong');
                label.textContent = entry.label;
                const detail = document.createElement('span');
                detail.textContent = `${entry.wins} victoire${entry.wins === 1 ? '' : 's'} sur ${entry.played}`;
                copy.append(label, detail);
                const meter = document.createElement('div');
                meter.className = 'stats-mode-meter';
                meter.setAttribute('role', 'img');
                meter.setAttribute('aria-label', `${entry.label} : ${rate} % de victoires`);
                const fill = document.createElement('span');
                fill.style.width = `${rate}%`;
                meter.append(fill);
                const percent = document.createElement('strong');
                percent.className = 'stats-mode-rate';
                percent.textContent = `${rate}%`;
                row.append(copy, meter, percent);
                modeList.append(row);
            });
            if (!hasModeStats) {
                const empty = document.createElement('p');
                empty.className = 'stats-empty';
                empty.textContent = 'Tes résultats par mode apparaîtront ici après tes prochaines parties.';
                modeList.append(empty);
            }

            const recordsByMode = Object.fromEntries(Object.keys(modeNames).map(mode => [mode, []]));
            for (const [key, seconds] of Object.entries(stats.records || {})) {
                const parts = key.split(':');
                const isDaily = parts[0] === 'daily' && parts.length === 4;
                const mode = isDaily ? 'daily' : parts[0];
                if (!recordsByMode[mode]) continue;
                recordsByMode[mode].push({
                    mode,
                    date: isDaily ? parts[1] : '',
                    grid: isDaily ? parts[2] : (parts[1] || 'Grille inconnue'),
                    mines: isDaily ? parts[3] : (parts[2] || '?'),
                    seconds
                });
            }
            for (const [mode, records] of Object.entries(recordsByMode)) {
                records.sort((a, b) => {
                    if (mode === 'daily') return b.date.localeCompare(a.date);
                    const area = grid => {
                        const [cols, rows] = grid.split('x').map(Number);
                        return Number.isFinite(cols) && Number.isFinite(rows) ? cols * rows : Number.MAX_SAFE_INTEGER;
                    };
                    return area(a.grid) - area(b.grid) || Number(a.mines) - Number(b.mines);
                });
            }
            const records = [];
            for (let index = 0; records.length < 6; index++) {
                let addedRecord = false;
                for (const mode of Object.keys(modeNames)) {
                    if (recordsByMode[mode][index]) {
                        records.push(recordsByMode[mode][index]);
                        addedRecord = true;
                        if (records.length === 6) break;
                    }
                }
                if (!addedRecord) break;
            }
            const recordsList = document.getElementById('statsRecords');
            recordsList.replaceChildren();
            if (records.length) {
                records.forEach(record => {
                    const row = document.createElement('div');
                    row.className = 'stats-record-row';
                    const label = document.createElement('span');
                    label.textContent = `${modeNames[record.mode]}${record.date ? ` · ${record.date}` : ''} · ${record.grid} · ${record.mines} mines`;
                    const time = document.createElement('strong');
                    time.textContent = `${record.seconds} s`;
                    row.append(label, time);
                    recordsList.append(row);
                });
            } else {
                recordsList.textContent = 'Aucune victoire enregistrée.';
            }

            const rank = RANKS[gameState.rankedTier];
            const next = RANKS[gameState.rankedTier + 1];
            document.getElementById('statsCurrentRank').textContent = rank.name;
            document.getElementById('statsRankBar').style.width = `${((gameState.rankedTier + 1) / RANKS.length) * 100}%`;
            document.getElementById('statsRankNext').textContent = next
                ? `Prochain palier : ${next.name} · ${next.cols}×${next.rows} · ${next.mines} mines · ${next.timeLimit} s max.`
                : 'Rang ultime atteint : améliore tes records personnels sur la grille 30×16.';
        }

        function openModal(id) {
            const modal = document.getElementById(id);
            if (!modal) return;
            const returnFocusTarget = activeModalId && activeModalId !== id ? previouslyFocusedElement : null;
            if (activeModalId && activeModalId !== id) closeAllModals();
            document.querySelectorAll('[id$="Modal"].modal-closing').forEach(finishModalClose);
            pauseGameTimer();
            if (id === 'customModal') updateCustomMineLimit();
            previouslyFocusedElement = returnFocusTarget || document.activeElement;
            activeModalId = id;
            modal.inert = false;
            modal.removeAttribute('aria-hidden');
            modal.classList.remove('modal-closing', 'modal-visible');
            modal.classList.remove('hidden');
            requestAnimationFrame(() => {
                if (activeModalId === id && !modal.classList.contains('hidden')) modal.classList.add('modal-visible');
            });
            const dialog = modal.querySelector('[role="dialog"]');
            (dialog?.querySelector('button, input, [tabindex="0"]') || dialog)?.focus();
        }

        function finishModalClose(modal) {
            clearTimeout(modal._modalCloseTimer);
            if (modal._modalTransitionEnd) modal.removeEventListener('transitionend', modal._modalTransitionEnd);
            modal._modalCloseTimer = null;
            modal._modalTransitionEnd = null;
            modal.classList.add('hidden');
            modal.classList.remove('modal-visible', 'modal-closing');
            modal.inert = false;
            modal.removeAttribute('aria-hidden');
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            if (!modal || modal.classList.contains('hidden') || modal.classList.contains('modal-closing')) return;
            if (id === 'helpModal' && !gameState.hasSeenTutorial) {
                gameState.hasSeenTutorial = true;
                saveGameData();
            }
            if (activeModalId === id) {
                activeModalId = null;
                const focusTarget = previouslyFocusedElement;
                previouslyFocusedElement = null;
                modal.inert = true;
                modal.setAttribute('aria-hidden', 'true');
                if (focusTarget && focusTarget.isConnected && focusTarget.getClientRects().length) {
                    focusTarget.focus();
                } else if (!document.getElementById('screenGame').classList.contains('hidden')) {
                    document.getElementById(rovingCellId)?.focus({ preventScroll: true });
                } else if (!document.getElementById('screenMenu').classList.contains('hidden')) {
                    document.getElementById('classicModeButton')?.focus({ preventScroll: true });
                }
            }
            modal.classList.remove('modal-visible');
            modal.classList.add('modal-closing');
            const finish = event => {
                if (event && (event.target !== modal || event.propertyName !== 'opacity')) return;
                finishModalClose(modal);
                if (!activeModalId) resumeGameTimer();
            };
            modal._modalTransitionEnd = finish;
            modal.addEventListener('transitionend', finish);
            modal._modalCloseTimer = setTimeout(() => finish(), 220);
        }

        function updateKeyboardHelp() {
            const help = document.getElementById('keyboardHelpText');
            if (!help || !keyBindings) return;
            const icon = help.querySelector('i');
            help.replaceChildren();
            if (icon) help.appendChild(icon);
            help.appendChild(document.createTextNode(
                'Flèches : déplacer · ' + keyBindings.reveal.map(formatControlKey).join(' / ') +
                ' : révéler · ' + keyBindings.flag.map(formatControlKey).join(' / ') +
                ' : drapeau · ' + keyBindings.restart.map(formatControlKey).join(' / ') +
                ' : recommencer.'
            ));
        }

        function updateMouseHelp() {
            const help = document.getElementById('mouseHelpText');
            if (!help || !mouseBindings) return;
            const icon = help.querySelector('i');
            help.replaceChildren();
            if (icon) help.appendChild(icon);
            help.appendChild(document.createTextNode(
                `Souris : ${formatMouseButton(mouseBindings.reveal)} pour révéler, ${formatMouseButton(mouseBindings.flag)} pour poser un drapeau, ${formatMouseButton(mouseBindings.restart)} pour recommencer. Sur mobile, maintiens une case pour poser un drapeau.`
            ));
        }

        function updateSettingsUI() {
            const soundToggle = document.getElementById('audioSettingToggle');
            if (soundToggle) {
                soundToggle.setAttribute('aria-pressed', String(audioEnabled));
                soundToggle.setAttribute('aria-label', audioEnabled ? 'Désactiver les effets sonores' : 'Activer les effets sonores');
                document.getElementById('audioSettingState').textContent = audioEnabled ? 'Activé' : 'Désactivé';
                document.getElementById('audioSettingIcon').className = `fa-solid ${audioEnabled ? 'fa-volume-high' : 'fa-volume-xmark'}`;
            }
            const volumeSlider = document.getElementById('audioVolume');
            if (volumeSlider) {
                volumeSlider.value = String(Math.round((audioEnabled ? audioVolume : 0) * 100));
                volumeSlider.disabled = !audioEnabled;
            }
            const volumeValue = document.getElementById('audioVolumeValue');
            if (volumeValue) volumeValue.textContent = `${Math.round((audioEnabled ? audioVolume : 0) * 100)}%`;

            const bindingButtons = {
                reveal: 'bindRevealButton',
                flag: 'bindFlagButton',
                restart: 'bindRestartButton'
            };
            const actionLabels = {
                reveal: 'révéler une case',
                flag: 'poser ou retirer un drapeau',
                restart: 'recommencer la grille'
            };
            for (const action of Object.keys(bindingButtons)) {
                const button = document.getElementById(bindingButtons[action]);
                if (!button) continue;
                const capturing = activeKeyCapture === action;
                const actionLabel = actionLabels[action];
                const bindingLabel = keyBindings[action].map(formatControlKey).join(' / ');
                button.textContent = capturing ? 'Appuie…' : bindingLabel;
                button.classList.toggle('is-listening', capturing);
                button.setAttribute('aria-label', capturing ? `Appuie sur la nouvelle touche pour ${actionLabel}` : `Touche pour ${actionLabel} : ${bindingLabel}`);
            }
            const mouseBindingButtons = {
                reveal: 'bindMouseRevealButton',
                flag: 'bindMouseFlagButton',
                restart: 'bindMouseRestartButton'
            };
            for (const action of Object.keys(mouseBindingButtons)) {
                const button = document.getElementById(mouseBindingButtons[action]);
                if (!button) continue;
                const capturing = activeMouseCapture === action;
                const actionLabel = actionLabels[action];
                const bindingLabel = formatMouseButton(mouseBindings[action]);
                button.textContent = capturing ? 'Clique…' : bindingLabel;
                button.classList.toggle('is-listening', capturing);
                button.closest('.settings-key-row')?.classList.toggle('is-mouse-listening', capturing);
                button.setAttribute('aria-label', capturing ? `Clique maintenant sur gauche, droit ou molette pour ${actionLabel}` : `Bouton souris pour ${actionLabel} : ${bindingLabel}`);
            }
            updateKeyboardHelp();
            updateMouseHelp();
            renderSettingsKeyboard();
            renderSettingsMouse();
        }

        function renderSettingsMouse() {
            const mouseVisual = document.getElementById('settingsVirtualMouse');
            if (!mouseVisual || !mouseBindings) return;
            const roleClasses = ['is-reveal', 'is-flag', 'is-restart'];
            mouseVisual.querySelectorAll('[data-mouse-button]').forEach(button => button.classList.remove(...roleClasses));
            for (const action of Object.keys(mouseBindings)) {
                const button = mouseVisual.querySelector('[data-mouse-button="' + mouseBindings[action] + '"]');
                if (button) button.classList.add('is-' + action);
            }
            mouseVisual.setAttribute('aria-label', `Souris : ${formatMouseButton(mouseBindings.reveal)} pour révéler une case, ${formatMouseButton(mouseBindings.flag)} pour poser un drapeau, ${formatMouseButton(mouseBindings.restart)} pour recommencer la grille.`);
        }

        function renderSettingsKeyboard() {
            const keyboard = document.getElementById('settingsVirtualKeyboard');
            if (!keyboard || !keyBindings) return;
            const keycaps = [...keyboard.querySelectorAll('.settings-keyboard-row:not(.settings-keyboard-extra) .settings-virtual-key')];
            const actionLabels = {
                reveal: 'révéler',
                flag: 'poser un drapeau',
                restart: 'recommencer'
            };
            const actionColors = {
                reveal: 'rgba(74, 189, 169, .42)',
                flag: 'rgba(242, 173, 79, .44)',
                restart: 'rgba(74, 222, 128, .42)'
            };
            const getKeyValues = keycap => [
                keycap.dataset.controlKey,
                keycap.dataset.shiftedKey,
                keycap.dataset.altgrKey,
                keycap.dataset.controlCode ? 'Code:' + keycap.dataset.controlCode : null
            ].filter(Boolean).map(normalizeControlKey);
            const knownKeys = new Set();
            keycaps.forEach(keycap => {
                getKeyValues(keycap).forEach(key => knownKeys.add(key));
                keycap.classList.remove('is-reveal', 'is-flag', 'is-restart', 'is-multi');
                keycap.style.removeProperty('background');
                keycap.removeAttribute('title');
            });

            const extraRow = document.getElementById('settingsKeyboardExtraKeys');
            const extraKeycaps = [];
            for (const action of Object.keys(actionLabels)) {
                for (const key of keyBindings[action]) {
                    if (!knownKeys.has(key)) {
                        const extraKeycap = document.createElement('span');
                        extraKeycap.className = 'settings-virtual-key is-' + action;
                        extraKeycap.dataset.controlKey = key;
                        extraKeycap.textContent = formatControlKey(key);
                        extraKeycap.title = formatControlKey(key) + ' : ' + actionLabels[action];
                        extraKeycaps.push(extraKeycap);
                    }
                }
            }
            keycaps.forEach(keycap => {
                const values = getKeyValues(keycap);
                const roles = Object.keys(actionLabels).filter(action =>
                    keyBindings[action].some(key => values.includes(key))
                );
                if (roles.length === 1) {
                    keycap.classList.add('is-' + roles[0]);
                    keycap.title = actionLabels[roles[0]];
                } else if (roles.length > 1) {
                    keycap.classList.add('is-multi');
                    const colorStops = roles.map((action, index) => {
                        const start = Math.round(index / roles.length * 100);
                        const end = Math.round((index + 1) / roles.length * 100);
                        return actionColors[action] + ' ' + start + '% ' + end + '%';
                    });
                    keycap.style.background = 'linear-gradient(135deg, ' + colorStops.join(', ') + ')';
                    keycap.title = roles.map(action => actionLabels[action]).join(' · ');
                }
            });
            if (extraRow) {
                extraRow.replaceChildren(...extraKeycaps);
                extraRow.hidden = extraKeycaps.length === 0;
            }
            keyboard.setAttribute('aria-label',
                'Clavier AZERTY. ' + keyBindings.reveal.map(formatControlKey).join(' et ') + ' pour révéler, ' +
                keyBindings.flag.map(formatControlKey).join(' et ') + ' pour poser un drapeau, ' +
                keyBindings.restart.map(formatControlKey).join(' et ') + ' pour recommencer.'
            );
        }

        function animateSettingsVirtualKey(event) {
            const keyboard = document.getElementById('settingsVirtualKeyboard');
            if (!keyboard || document.getElementById('screenSettings').classList.contains('hidden')) return;
            const pressId = event.code || ('key:' + (controlKeyFromEvent(event) || event.key));
            const existingKeycap = heldSettingsVirtualKeys.get(pressId);
            if (existingKeycap?.isConnected) {
                existingKeycap.classList.add('is-held');
                return;
            }
            if (existingKeycap) heldSettingsVirtualKeys.delete(pressId);
            const key = controlKeyFromEvent(event);
            const keycaps = [...keyboard.querySelectorAll('.settings-virtual-key')];
            const keycap = (event.code && keycaps.find(item => item.dataset.controlCode === event.code)) ||
                keycaps.find(item => [
                    item.dataset.controlKey,
                    item.dataset.shiftedKey,
                    item.dataset.altgrKey,
                    item.dataset.controlCode ? 'Code:' + item.dataset.controlCode : null
                ].filter(Boolean).map(normalizeControlKey).includes(key));
            let pressedKeycap = keycap;
            if (!pressedKeycap) {
                const extraRow = document.getElementById('settingsKeyboardExtraKeys');
                if (!extraRow) return;
                pressedKeycap = document.createElement('span');
                pressedKeycap.className = 'settings-virtual-key';
                pressedKeycap.dataset.controlKey = key || event.key;
                pressedKeycap.dataset.transientPress = 'true';
                pressedKeycap.textContent = formatPressedKey(event, key);
                extraRow.append(pressedKeycap);
                extraRow.hidden = false;
            }
            heldSettingsVirtualKeys.set(pressId, pressedKeycap);
            pressedKeycap.classList.add('is-held');
            clearTimeout(pressedKeycap._pressAnimationTimer);
            pressedKeycap.classList.remove('is-pressed');
            void pressedKeycap.offsetWidth;
            pressedKeycap.classList.add('is-pressed');
            pressedKeycap._pressAnimationTimer = setTimeout(() => {
                pressedKeycap.classList.remove('is-pressed');
            }, 420);
        }

        function virtualKeyPressId(event) {
            return event.code || ('key:' + (controlKeyFromEvent(event) || event.key));
        }

        function releaseSettingsVirtualKey(event) {
            const pressId = virtualKeyPressId(event);
            const keycap = heldSettingsVirtualKeys.get(pressId);
            if (!keycap) return;
            heldSettingsVirtualKeys.delete(pressId);
            clearTimeout(keycap._pressAnimationTimer);
            keycap.classList.remove('is-held', 'is-pressed');
            if (keycap.dataset.transientPress === 'true') {
                keycap.remove();
                const extraRow = document.getElementById('settingsKeyboardExtraKeys');
                if (extraRow && !extraRow.children.length) extraRow.hidden = true;
            }
        }

        function clearHeldSettingsVirtualKeys() {
            for (const [pressId, keycap] of heldSettingsVirtualKeys) {
                clearTimeout(keycap._pressAnimationTimer);
                keycap.classList.remove('is-held', 'is-pressed');
                if (keycap.dataset.transientPress === 'true') keycap.remove();
                heldSettingsVirtualKeys.delete(pressId);
            }
            const extraRow = document.getElementById('settingsKeyboardExtraKeys');
            if (extraRow && !extraRow.children.length) extraRow.hidden = true;
        }

        function formatPressedKey(event, key) {
            const labels = {
                ArrowUp: '↑',
                ArrowDown: '↓',
                ArrowLeft: '←',
                ArrowRight: '→',
                Shift: 'Maj',
                Control: 'Ctrl',
                Alt: 'Alt',
                AltGraph: 'AltGr',
                Tab: 'Tab',
                Escape: 'Échap',
                Backspace: '⌫'
            };
            return labels[event.key] || formatControlKey(key || event.key);
        }

        function animateSettingsVirtualMouseButton(event) {
            const mouseVisual = document.getElementById('settingsVirtualMouse');
            if (!mouseVisual || document.getElementById('screenSettings').classList.contains('hidden')) return;
            const button = mouseVisual.querySelector('[data-mouse-button="' + event.button + '"]');
            if (!button) return;
            const buttonId = String(event.button);
            const existingButton = heldSettingsVirtualMouseButtons.get(buttonId);
            if (existingButton?.isConnected) {
                existingButton.classList.add('is-held');
                return;
            }
            heldSettingsVirtualMouseButtons.set(buttonId, button);
            button.classList.add('is-held');
            clearTimeout(button._clickAnimationTimer);
            button.classList.remove('is-clicked');
            void button.offsetWidth;
            button.classList.add('is-clicked');
            button._clickAnimationTimer = setTimeout(() => button.classList.remove('is-clicked'), 340);
        }

        function releaseSettingsVirtualMouseButton(event) {
            const buttonId = String(event.button);
            const button = heldSettingsVirtualMouseButtons.get(buttonId);
            if (!button) return;
            heldSettingsVirtualMouseButtons.delete(buttonId);
            clearTimeout(button._clickAnimationTimer);
            button.classList.remove('is-held', 'is-clicked');
        }

        function clearHeldSettingsVirtualMouseButtons() {
            for (const [buttonId, button] of heldSettingsVirtualMouseButtons) {
                clearTimeout(button._clickAnimationTimer);
                button.classList.remove('is-held', 'is-clicked');
                heldSettingsVirtualMouseButtons.delete(buttonId);
            }
        }

        function toggleAudio() {
            audioEnabled = !audioEnabled;
            document.getElementById('audioPreviewStatus').textContent = '';
            saveUserSettings();
            updateSettingsUI();
        }

        function previewAudio() {
            const status = document.getElementById('audioPreviewStatus');
            if (!audioEnabled) {
                status.textContent = 'Active les effets sonores pour écouter.';
                return;
            }
            if (audioVolume <= 0) {
                status.textContent = 'Le volume est à 0 %.';
                return;
            }
            if (!(window.AudioContext || window.webkitAudioContext)) {
                status.textContent = 'Le son n’est pas disponible dans ce navigateur.';
                return;
            }
            playSound('win');
            status.textContent = 'Aperçu sonore au volume actuel.';
        }

        function setAudioVolume(value) {
            if (!audioEnabled) return;
            const numericValue = Number(value);
            if (!Number.isFinite(numericValue)) return;
            audioVolume = Math.max(0, Math.min(1, numericValue / 100));
            document.getElementById('audioPreviewStatus').textContent = '';
            saveUserSettings();
            updateSettingsUI();
        }

        function startKeyCapture(action) {
            if (!Object.prototype.hasOwnProperty.call(keyBindings, action)) return;
            activeMouseCapture = null;
            document.getElementById('settingsMouseStatus').textContent = '';
            activeKeyCapture = action;
            updateSettingsUI();
            const actionLabel = {
                reveal: 'révéler une case',
                flag: 'poser ou retirer un drapeau',
                restart: 'recommencer la grille'
            }[action];
            document.getElementById('settingsKeyStatus').textContent = `Appuie sur une touche pour ${actionLabel}. Échap annule.`;
            const buttonId = { reveal: 'bindRevealButton', flag: 'bindFlagButton', restart: 'bindRestartButton' }[action];
            document.getElementById(buttonId).focus({ preventScroll: true });
        }

        function cancelKeyCapture(message = 'Saisie de touche annulée.') {
            activeKeyCapture = null;
            updateSettingsUI();
            document.getElementById('settingsKeyStatus').textContent = message;
        }

        function startMouseCapture(action) {
            if (!Object.prototype.hasOwnProperty.call(mouseBindings, action)) return;
            activeKeyCapture = null;
            document.getElementById('settingsKeyStatus').textContent = '';
            activeMouseCapture = action;
            updateSettingsUI();
            const actionLabel = {
                reveal: 'révéler une case',
                flag: 'poser ou retirer un drapeau',
                restart: 'recommencer la grille'
            }[action];
            document.getElementById('settingsMouseStatus').textContent = `Clique maintenant sur gauche, droit ou molette pour ${actionLabel}. Si le bouton sert déjà, les actions s’échangent. Échap annule.`;
            const buttonId = { reveal: 'bindMouseRevealButton', flag: 'bindMouseFlagButton', restart: 'bindMouseRestartButton' }[action];
            document.getElementById(buttonId).focus({ preventScroll: true });
        }

        function cancelMouseCapture(message = 'Saisie de bouton annulée.') {
            activeMouseCapture = null;
            updateSettingsUI();
            document.getElementById('settingsMouseStatus').textContent = message;
        }

        function captureMouseButton(event) {
            if (!activeMouseCapture) return false;
            event.preventDefault();
            event.stopPropagation();
            animateSettingsVirtualMouseButton(event);
            suppressMouseCaptureFollowupButton = event.button;
            if (event.button !== 0 && event.button !== 1 && event.button !== 2) {
                document.getElementById('settingsMouseStatus').textContent = 'Ce bouton n’est pas pris en charge. Utilise gauche, droit ou molette.';
                return true;
            }

            const action = activeMouseCapture;
            const previousButton = mouseBindings[action];
            const conflict = Object.entries(mouseBindings).find(([assignedAction, button]) => assignedAction !== action && button === event.button);
            mouseBindings[action] = event.button;
            if (conflict) mouseBindings[conflict[0]] = previousButton;
            activeMouseCapture = null;
            saveUserSettings();
            updateSettingsUI();
            const actionLabels = { reveal: 'révéler une case', flag: 'poser ou retirer un drapeau', restart: 'recommencer la grille' };
            const reassignedMessage = conflict ? ` ${formatMouseButton(previousButton)} attribué pour ${actionLabels[conflict[0]]}.` : '';
            document.getElementById('settingsMouseStatus').textContent = `${formatMouseButton(event.button)} attribué pour ${actionLabels[action]}.${reassignedMessage}`;
            return true;
        }

        function captureControlKey(event) {
            if (!activeKeyCapture) return false;
            if (event.key === 'Shift' || event.key === 'AltGraph') return false;
            if (event.key === 'Tab') {
                cancelKeyCapture();
                return false;
            }
            if (event.key === 'Escape') {
                event.preventDefault();
                event.stopPropagation();
                cancelKeyCapture();
                return true;
            }
            if (hasShortcutModifier(event)) return false;
            if (event.repeat) {
                event.preventDefault();
                event.stopPropagation();
                return true;
            }

            const key = controlKeyFromEvent(event);
            if (!isBindableControlKey(key)) {
                event.preventDefault();
                event.stopPropagation();
                document.getElementById('settingsKeyStatus').textContent = 'Cette touche est réservée. Choisis une touche simple, Entrée ou Espace.';
                return true;
            }

            const conflict = Object.entries(keyBindings).some(([action, keys]) =>
                action !== activeKeyCapture && keys.some(assignedKey => controlKeysConflict(assignedKey, key))
            );
            if (conflict) {
                event.preventDefault();
                event.stopPropagation();
                document.getElementById('settingsKeyStatus').textContent = `${formatControlKey(key)} est déjà attribuée à une autre action.`;
                return true;
            }

            const action = activeKeyCapture;
            keyBindings[action] = [key];
            activeKeyCapture = null;
            saveUserSettings();
            updateSettingsUI();
            const actionLabel = {
                reveal: 'révéler une case',
                flag: 'poser ou retirer un drapeau',
                restart: 'recommencer la grille'
            }[action];
            document.getElementById('settingsKeyStatus').textContent = `${formatControlKey(key)} attribuée pour ${actionLabel}.`;
            event.preventDefault();
            event.stopPropagation();
            return true;
        }

        function resetUserSettings() {
            activeKeyCapture = null;
            activeMouseCapture = null;
            audioEnabled = true;
            audioVolume = 0.55;
            document.getElementById('audioPreviewStatus').textContent = '';
            document.getElementById('settingsMouseStatus').textContent = '';
            keyBindings = {
                reveal: [...DEFAULT_KEY_BINDINGS.reveal],
                flag: [...DEFAULT_KEY_BINDINGS.flag],
                restart: [...DEFAULT_KEY_BINDINGS.restart]
            };
            mouseBindings = { ...DEFAULT_MOUSE_BINDINGS };
            saveUserSettings();
            updateSettingsUI();
            document.getElementById('settingsKeyStatus').textContent = 'Paramètres rétablis par défaut.';
        }

        document.addEventListener('keydown', (event) => {
            if (document.querySelector('[id$="Modal"].modal-closing')) {
                event.preventDefault();
                return;
            }
            if (activeMouseCapture && event.key === 'Escape') {
                event.preventDefault();
                event.stopPropagation();
                cancelMouseCapture();
                animateSettingsVirtualKey(event);
                return;
            }
            const keyWasCaptured = captureControlKey(event);
            animateSettingsVirtualKey(event);
            if (keyWasCaptured) return;
            const gameScreen = document.getElementById('screenGame');
            const target = event.target instanceof Element ? event.target : null;
            if (!event.defaultPrevented && !activeModalId && !gameScreen.classList.contains('hidden') &&
                !hasShortcutModifier(event) && isControlBindingPressed('restart', event) &&
                !target?.closest('input, textarea, select, [contenteditable="true"]')) {
                event.preventDefault();
                if (!event.repeat) restartGame();
                return;
            }
            if (!activeModalId) {
                if (event.key === 'Escape' && !document.getElementById('screenAppearance').classList.contains('hidden')) {
                    closeAppearanceSettings();
                } else if (event.key === 'Escape' && !document.getElementById('screenStats').classList.contains('hidden')) {
                    closeStatsPage();
                } else if (event.key === 'Escape' && !document.getElementById('screenSettings').classList.contains('hidden')) {
                    closeSettingsPage();
                }
                return;
            }
            const modal = document.getElementById(activeModalId);
            if (!modal || modal.classList.contains('hidden')) return;
            if (event.key === 'Escape') {
                closeModal(activeModalId);
                return;
            }
            if (event.key !== 'Tab') return;
            const focusable = [...modal.querySelectorAll('button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')]
                .filter(element => element.getClientRects().length);
            if (!focusable.length) { event.preventDefault(); return; }
            const first = focusable[0], last = focusable[focusable.length - 1];
            if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
                event.preventDefault(); last.focus();
            } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
                event.preventDefault(); first.focus();
            }
        });
        document.addEventListener('keyup', releaseSettingsVirtualKey);
        document.addEventListener('mousedown', (event) => {
            if (activeMouseCapture) {
                captureMouseButton(event);
                return;
            }
            if (suppressMouseCaptureFollowupButton !== null) suppressMouseCaptureFollowupButton = null;
            animateSettingsVirtualMouseButton(event);
        }, true);
        const suppressCapturedMouseFollowup = (event) => {
            if (suppressMouseCaptureFollowupButton !== event.button) return;
            suppressMouseCaptureFollowupButton = null;
            event.preventDefault();
            event.stopImmediatePropagation();
        };
        document.addEventListener('click', suppressCapturedMouseFollowup, true);
        document.addEventListener('auxclick', suppressCapturedMouseFollowup, true);
        document.addEventListener('contextmenu', suppressCapturedMouseFollowup, true);
        document.addEventListener('mouseup', releaseSettingsVirtualMouseButton);
        window.addEventListener('blur', clearHeldSettingsVirtualKeys);
        window.addEventListener('blur', () => {
            clearHeldSettingsVirtualMouseButtons();
            suppressMouseCaptureFollowupButton = null;
            if (activeMouseCapture) cancelMouseCapture();
        });

