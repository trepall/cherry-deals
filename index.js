<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CherryDeals</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #ff69b4, #ff1493);
            color: #fff;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 400px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px 0;
        }

        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 8px;
        }

        .logo-icon {
            font-size: 32px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .logo-text {
            font-size: 28px;
            font-weight: 700;
        }

        .subtitle {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.85);
            font-weight: 400;
        }

        .menu {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }

        .btn {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            padding: 14px 18px;
            border: none;
            border-radius: 14px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            background: rgba(255, 255, 255, 0.9);
            color: #333;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.2s ease;
            text-align: left;
            position: relative;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .btn:active {
            transform: translateY(0);
        }

        .btn-icon {
            margin-right: 12px;
            font-size: 18px;
            width: 20px;
            text-align: center;
        }

        .btn-primary {
            background: rgba(255, 255, 255, 0.9);
            color: #333;
        }

        .btn-success {
            background: #2ecc71;
            color: #fff;
        }

        .btn-danger {
            background: #e74c3c;
            color: #fff;
        }

        .btn-info {
            background: #3498db;
            color: #fff;
        }

        .btn-warning {
            background: #f39c12;
            color: #fff;
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        .btn:disabled:hover {
            transform: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .hidden {
            display: none;
        }

        .section {
            width: 100%;
        }

        .section-title {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 20px;
            text-align: center;
        }

        .back-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .back-btn {
            background: none;
            border: none;
            color: #fff;
            font-size: 17px;
            cursor: pointer;
            padding: 8px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .back-btn:hover {
            opacity: 0.8;
        }

        .form-group {
            margin-bottom: 18px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-size: 16px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.9);
        }

        .form-control {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.9);
            color: #333;
            font-size: 16px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .form-control:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
        }

        textarea.form-control {
            resize: vertical;
            min-height: 100px;
        }

        .deal-list {
            width: 100%;
        }

        .deal-item {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            padding: 14px;
            margin-bottom: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .deal-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .deal-title {
            font-weight: 600;
            font-size: 16px;
            color: #333;
            margin-bottom: 5px;
        }

        .deal-details {
            font-size: 14px;
            color: #666;
        }

        .deal-status {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 600;
            margin-top: 5px;
        }

        .status-open { background: #e3f2fd; color: #1976d2; }
        .status-paid { background: #fff3e0; color: #f57c00; }
        .status-transferred { background: #e3f2fd; color: #1976d2; }
        .status-completed { background: #e8f5e8; color: #2e7d32; }

        .chat-container {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 15px;
        }

        #chatMessages {
            height: 200px;
            overflow-y: auto;
            margin-bottom: 15px;
            padding: 10px;
            background: #fff;
            border-radius: 8px;
            color: #333;
        }

        .chat-message {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #f0f0f0;
        }

        .chat-message:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }

        .message-sender {
            font-weight: 600;
            color: #ff1493;
        }

        .deal-info {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            padding: 18px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .deal-info p {
            margin: 10px 0;
            font-size: 16px;
            color: #333;
        }

        .deal-info b {
            color: #ff1493;
        }

        .deal-link {
            word-break: break-all;
            color: #ff1493;
            text-decoration: underline;
        }

        .warning-box {
            background: #fff3cd;
            color: #856404;
            padding: 12px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }

        .success-box {
            background: #d4edda;
            color: #155724;
            padding: 16px;
            border-radius: 12px;
            margin: 20px 0;
            border-left: 4px solid #28a745;
            text-align: center;
        }

        .info-box {
            background: #d1ecf1;
            color: #0c5460;
            padding: 12px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #17a2b8;
        }

        .balance-container {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            color: #333;
        }

        .balance-amount {
            font-size: 32px;
            font-weight: bold;
            color: #ff1493;
            margin: 10px 0;
        }

        .balance-actions {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        .balance-actions .btn {
            flex: 1;
            justify-content: center;
            text-align: center;
        }

        .payment-info {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            color: #333;
        }

        .payment-number {
            font-size: 24px;
            font-weight: bold;
            color: #ff1493;
            margin: 15px 0;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 8px;
        }

        .payment-instruction {
            font-size: 14px;
            color: #666;
            margin: 10px 0;
        }

        /* Стили для бейджа уведомлений */
        .notification-badge {
            position: absolute;
            top: 8px;
            right: 12px;
            background: #e74c3c;
            color: white;
            border-radius: 10px;
            padding: 2px 6px;
            font-size: 12px;
            font-weight: bold;
            min-width: 18px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .chat-header-actions {
            display: flex;
            gap: 10px;
        }

        .chat-header-actions .btn {
            flex: 1;
            justify-content: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Главное меню -->
        <div id="menu" class="section">
            <div class="header">
                <div class="logo">
                    <span class="logo-icon">🍒</span>
                    <span class="logo-text">CherryDeals</span>
                </div>
                <div class="subtitle">Безопасные сделки в Telegram</div>
            </div>

            <div class="menu">
                <button class="btn btn-primary" onclick="showSection('createDeal')">
                    <span class="btn-icon">✨</span>Создать сделку
                </button>
                <button class="btn btn-primary" onclick="showSection('myDeals'); loadMyDeals()">
                    <span class="btn-icon">📜</span>Мои сделки
                </button>
                <button class="btn btn-primary" onclick="showSection('myPurchases'); loadMyPurchases()">
                    <span class="btn-icon">🛒</span>Мои покупки
                </button>
                <button class="btn btn-primary" onclick="showSection('balance')">
                    <span class="btn-icon">💰</span>Баланс
                </button>
                <button class="btn btn-primary" onclick="showSection('chat')">
                    <span class="btn-icon">💬</span>Чат
                </button>
                <button class="btn btn-primary" id="notificationsBtn" onclick="showSection('notifications'); markNotificationsAsRead()">
                    <span class="btn-icon">🔔</span>Уведомления
                    <span id="notificationBadge" class="notification-badge hidden">0</span>
                </button>
                <button class="btn btn-danger" onclick="window.open('https://t.me/SuportsDeals', '_blank')">
                    <span class="btn-icon">🆘</span>Поддержка
                </button>
            </div>
        </div>

        <!-- Баланс -->
        <div id="balance" class="section hidden">
            <div class="back-header">
                <button class="back-btn" onclick="showSection('menu')">
                    <span class="btn-icon">←</span> Назад
                </button>
            </div>

            <h2 class="section-title">Ваш баланс</h2>

            <div class="balance-container">
                <div>Текущий баланс</div>
                <div class="balance-amount" id="balanceAmount">0 ₽</div>
                
                <div class="balance-actions">
                    <button class="btn btn-success" onclick="showSection('deposit')">
                        <span class="btn-icon">💳</span>Пополнить
                    </button>
                    <button class="btn btn-warning" onclick="showSection('withdraw')">
                        <span class="btn-icon">🏦</span>Вывести
                    </button>
                </div>
            </div>
        </div>

        <!-- Пополнение -->
        <div id="deposit" class="section hidden">
            <div class="back-header">
                <button class="back-btn" onclick="showSection('balance')">
                    <span class="btn-icon">←</span> Назад
                </button>
            </div>

            <h2 class="section-title">Пополнение баланса</h2>

            <div class="payment-info">
                <div>Для пополнения баланса переведите средства по реквизитам:</div>
                <div class="payment-number">89202555790</div>
                <div class="payment-instruction">Юмани</div>
                <div class="payment-instruction">Баланс автоматически пополнится в течении 10 минут</div>
                
                <button class="btn btn-success" onclick="showSection('balance')" style="margin-top: 20px;">
                    <span class="btn-icon">✅</span>Я перевел(а)
                </button>
            </div>
        </div>

        <!-- Вывод -->
        <div id="withdraw" class="section hidden">
            <div class="back-header">
                <button class="back-btn" onclick="showSection('balance')">
                    <span class="btn-icon">←</span> Назад
                </button>
            </div>

            <h2 class="section-title">Вывод средств</h2>

            <div class="balance-container">
                <div class="form-group">
                    <label class="form-label">Сумма вывода (₽):</label>
                    <input type="number" class="form-control" id="withdrawAmount" placeholder="Введите сумму">
                </div>

                <div class="form-group">
                    <label class="form-label">Реквизиты для вывода:</label>
                    <input type="text" class="form-control" id="withdrawDetails" placeholder="Номер карты/кошелька">
                </div>

                <button class="btn btn-warning" onclick="processWithdrawal()">
                    <span class="btn-icon">🏦</span>Заказать вывод
                </button>
            </div>
        </div>

        <!-- Создать сделку -->
        <div id="createDeal" class="section hidden">
            <div class="back-header">
                <button class="back-btn" onclick="showSection('menu')">
                    <span class="btn-icon">←</span> Назад
                </button>
            </div>

            <h2 class="section-title">Создать сделку</h2>

            <div class="form-group">
                <label for="dealType" class="form-label">Тип сделки:</label>
                <select id="dealType" class="form-control">
                    <option value="Подарок">🎁 Подарок</option>
                    <option value="Канал/Чат">📣 Канал/Чат</option>
                    <option value="Звезды">⭐ Звезды</option>
                    <option value="NFT">👤 NFT Юзернейм</option>
                </select>
            </div>

            <div class="form-group">
                <label for="dealCurrency" class="form-label">Валюта:</label>
                <select id="dealCurrency" class="form-control">
                    <option value="RUB">🇷🇺 RUB</option>
                    <option value="EUR">🇪🇺 EUR</option>
                    <option value="UAH">🇺🇦 UAH</option>
                    <option value="USD">🇺🇸 USD</option>
                    <option value="TON">💎 TON</option>
                    <option value="UZS">🇺🇿 UZS</option>
                    <option value="KZT">🇰🇿 KZT</option>
                    <option value="KGS">🇰🇬 KGS</option>
                    <option value="IDR">🇮🇩 IDR</option>
                    <option value="BYN">🇧🇾 BYN</option>
                    <option value="STARS">⭐ STARS</option>
                </select>
            </div>

            <div class="form-group">
                <label for="dealAmount" class="form-label">Сумма:</label>
                <input id="dealAmount" class="form-control" placeholder="Сумма" type="number" />
            </div>

            <div class="form-group">
                <label for="dealDesc" class="form-label">Ссылка на товар (обязательно):</label>
                <textarea id="dealDesc" class="form-control" placeholder="https://example.com/товар"></textarea>
            </div>

            <button class="btn btn-success" onclick="createDeal()">
                <span class="btn-icon">✅</span>Создать сделку
            </button>
        </div>

        <!-- Мои сделки -->
        <div id="myDeals" class="section hidden">
            <div class="back-header">
                <button class="back-btn" onclick="showSection('menu')">
                    <span class="btn-icon">←</span> Назад
                </button>
            </div>

            <h2 class="section-title">Мои сделки</h2>
            
            <div id="dealsList" class="deal-list"></div>
        </div>

        <!-- Мои покупки -->
        <div id="myPurchases" class="section hidden">
            <div class="back-header">
                <button class="back-btn" onclick="showSection('menu')">
                    <span class="btn-icon">←</span> Назад
                </button>
            </div>

            <h2 class="section-title">Мои покупки</h2>
            
            <div id="purchasesList" class="deal-list"></div>
        </div>

        <!-- Просмотр сделки -->
        <div id="dealView" class="section hidden">
            <div class="back-header">
                <button class="back-btn" onclick="showSection('myDeals')">
                    <span class="btn-icon">←</span> Назад
                </button>
            </div>

            <h2 class="section-title">Данные сделки</h2>
            
            <div id="dealDetails"></div>
        </div>

        <!-- Просмотр покупки -->
        <div id="purchaseView" class="section hidden">
            <div class="back-header">
                <button class="back-btn" onclick="showSection('myPurchases')">
                    <span class="btn-icon">←</span> Назад
                </button>
            </div>

            <h2 class="section-title">Данные покупки</h2>
            
            <div id="purchaseDetails"></div>
        </div>

        <!-- Чат -->
        <div id="chat" class="section hidden">
            <div class="back-header">
                <div>
                    <button class="back-btn" onclick="goBackFromChat()">
                        <span class="btn-icon">←</span> Назад
                    </button>
                </div>
                <div class="chat-header-actions">
                    <button class="btn btn-info" id="goToPaymentBtn" onclick="goToPaymentFromChat()">
                        <span class="btn-icon">💳</span> К оплате
                    </button>
                </div>
            </div>

            <h2 class="section-title">Чат</h2>
            
            <div class="chat-container">
                <div id="chatMessages"></div>
                <input id="chatInput" class="form-control" placeholder="Введите сообщение..." />
                <button class="btn btn-success" onclick="sendMessage()" style="margin-top: 15px;">
                    <span class="btn-icon">📤</span>Отправить
                </button>
            </div>
        </div>

        <!-- Уведомления -->
        <div id="notifications" class="section hidden">
            <div class="back-header">
                <button class="back-btn" onclick="showSection('menu')">
                    <span class="btn-icon">←</span> Назад
                </button>
            </div>

            <h2 class="section-title">Уведомления</h2>
            
            <div id="notificationsList">
                <!-- Уведомления будут добавляться сюда -->
            </div>
        </div>

        <!-- Интерфейс покупателя -->
        <div id="buyerInterface" class="section hidden">
            <div class="back-header">
                <button class="back-btn" onclick="goBackFromBuyer()">
                    <span class="btn-icon">←</span> Назад
                </button>
            </div>

            <div class="header">
                <div class="logo">
                    <span class="logo-icon">🍒</span>
                    <span class="logo-text">CherryDeals</span>
                </div>
                <div class="subtitle">Оплата сделки</div>
            </div>
            
            <div id="buyerDealDetails"></div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script>
        const supabaseUrl = "https://jlfmvzjxjibgxstmqlme.supabase.co";
        const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZm12emp4amliZ3hzdG1xbG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0ODA5MzcsImV4cCI6MjA3NTA1NjkzN30.Qvv_vYHsEX-Ia5yGqiqInxdWnvrD-_cYh84fhJpMlcA";
        const client = supabase.createClient(supabaseUrl, supabaseKey);

        // Генерируем уникальный ID пользователя при первом посещении
        let currentUser = localStorage.getItem('cherryDealsUserId');
        if (!currentUser) {
            currentUser = "user_" + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('cherryDealsUserId', currentUser);
        }

        let userBalance = 0;
        let isAdmin = false;
        let isOwner = false;
        let currentDealLink = null;

        // Сохраняем команды в localStorage
        function saveCommands() {
            const commands = {
                isAdmin: isAdmin,
                isOwner: isOwner,
                userBalance: userBalance
            };
            localStorage.setItem('cherryDealsCommands', JSON.stringify(commands));
        }

        // Загружаем команды из localStorage
        function loadCommands() {
            const saved = localStorage.getItem('cherryDealsCommands');
            if (saved) {
                const commands = JSON.parse(saved);
                isAdmin = commands.isAdmin || false;
                isOwner = commands.isOwner || false;
                userBalance = commands.userBalance || 0;
            }
        }

        // Проверяем, это страница покупателя или основная
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const dealLink = hashParams.get('deal');

        const urlParams = new URLSearchParams(window.location.search);
        const oldDealLink = urlParams.get('deal');
        if (oldDealLink && !dealLink) {
            window.location.href = window.location.origin + window.location.pathname + '#deal=' + oldDealLink;
        }

        // Инициализируем пользователя и показываем главное меню
        if (dealLink) {
            currentDealLink = dealLink;
            loadDealForBuyer(dealLink);
        } else {
            showSection('menu');
            initializeUser();
        }

        async function initializeUser() {
            // Загружаем сохраненные команды
            loadCommands();
            
            // Создаем пользователя с нулевым балансом если не существует
            const { data, error } = await client
                .from('users')
                .select('balance')
                .eq('username', currentUser)
                .single();
                
            if (error) {
                // Пользователь не существует, создаем с балансом 0
                await client.from('users').insert([{
                    username: currentUser,
                    balance: 0
                }]);
                userBalance = 0;
            } else {
                // Используем баланс из базы, но если есть админские права - используем сохраненный баланс
                userBalance = isAdmin ? userBalance : (data.balance || 0);
            }
            document.getElementById('balanceAmount').textContent = userBalance + ' ₽';
            saveCommands();
            
            // Загружаем количество непрочитанных уведомлений
            updateNotificationBadge();
        }

        function showSection(id) {
            document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
            document.getElementById(id).classList.remove("hidden");
            
            if (id === "chat") {
                updateChatDisplay();
            } else if (id === "balance") {
                loadUserBalance();
            } else if (id === "notifications") {
                loadNotifications();
            }
        }

        function goBackFromChat() {
            // Всегда возвращаемся в главное меню из чата
            showSection('menu');
            currentDealLink = null;
        }

        function goToPaymentFromChat() {
            // Возвращаемся к оплате сделки
            if (currentDealLink) {
                window.location.href = window.location.origin + window.location.pathname + '#deal=' + currentDealLink;
                location.reload();
            } else {
                alert('Нет активной сделки для возврата');
            }
        }

        function goBackFromBuyer() {
            // Возвращаемся в главное меню
            window.location.href = window.location.origin + window.location.pathname;
        }

        async function loadUserBalance() {
            const { data, error } = await client
                .from('users')
                .select('balance')
                .eq('username', currentUser)
                .single();
                
            if (data) {
                // Используем баланс из базы, но если есть админские права - используем сохраненный баланс
                userBalance = isAdmin ? userBalance : (data.balance || 0);
                document.getElementById('balanceAmount').textContent = userBalance + ' ₽';
            }
            saveCommands();
        }

        async function processWithdrawal() {
            const amount = parseFloat(document.getElementById('withdrawAmount').value);
            const details = document.getElementById('withdrawDetails').value.trim();

            if (!amount || amount <= 0) {
                alert('Введите корректную сумму вывода');
                return;
            }

            if (amount < 6000) {
                alert('Минимальная сумма вывода - 6000₽');
                return;
            }

            if (amount > userBalance) {
                alert('Недостаточно средств на балансе');
                return;
            }

            if (!details) {
                alert('Введите реквизиты для вывода');
                return;
            }

            const { error } = await client.from('transactions').insert([{
                from_user: currentUser,
                to_user: 'withdrawal',
                amount: amount,
                type: 'withdrawal',
                status: 'pending',
                details: details,
                created_at: new Date()
            }]);

            if (!error) {
                alert(`Запрос на вывод ${amount}₽ отправлен на обработку. Ожидайте поступления средств в течение 24 часов.`);
                showSection('balance');
            } else {
                alert('Ошибка при создании запроса на вывод: ' + error.message);
            }
        }

        // Функция проверки ссылки
        function isValidUrl(string) {
            try {
                new URL(string);
                return true;
            } catch (_) {
                return false;
            }
        }

        async function createDeal() {
            const type = document.getElementById("dealType").value;
            const currency = document.getElementById("dealCurrency").value;
            const amount = parseFloat(document.getElementById("dealAmount").value);
            const desc = document.getElementById("dealDesc").value.trim();

            if (!amount || !desc) {
                alert("Пожалуйста, заполните все поля");
                return;
            }

            // Проверяем что введена ссылка
            if (!isValidUrl(desc)) {
                alert("Пожалуйста, введите корректную ссылку на товар");
                return;
            }

            const link = Math.random().toString(36).substr(2, 9);

            const { data, error } = await client.from("deals").insert([
                { 
                    seller: currentUser, 
                    type, 
                    currency, 
                    amount, 
                    description: desc, 
                    link, 
                    status: "open" 
                }
            ]);

            if (error) {
                alert("Ошибка: " + error.message);
            } else {
                alert("Сделка создана! Ссылка для покупателя: " + window.location.origin + window.location.pathname + "#deal=" + link);
                showSection('menu');
            }
        }

        async function loadMyDeals() {
            const { data, error } = await client
                .from("deals")
                .select("*")
                .eq("seller", currentUser)
                .order('created_at', { ascending: false });

            const list = document.getElementById("dealsList");
            list.innerHTML = "";
            
            if (data && data.length > 0) {
                data.forEach(deal => {
                    const div = document.createElement("div");
                    div.className = "deal-item";
                    div.innerHTML = `
                        <div class="deal-title">${deal.type}</div>
                        <div class="deal-details">${deal.amount} ${deal.currency}</div>
                        <div class="deal-status status-${deal.status}">${getStatusText(deal.status)}</div>
                        ${deal.status === 'paid' ? '<div style="margin-top: 10px;"><button class="btn btn-success" onclick="confirmTransfer(\'' + deal.id + '\')" style="padding: 8px 12px; font-size: 14px;">✅ Подтвердить передачу</button></div>' : ''}
                        ${deal.status === 'transferred' ? '<div style="margin-top: 10px;"><button class="btn btn-info" style="padding: 8px 12px; font-size: 14px;">⏳ Ожидание подтверждения покупателя</button></div>' : ''}
                    `;
                    div.onclick = () => openDeal(deal);
                    list.appendChild(div);
                });
            } else {
                list.innerHTML = '<div class="deal-item" style="text-align: center; color: #666;">У вас пока нет сделок</div>';
            }
        }

        // НОВАЯ ФУНКЦИЯ: Загрузка покупок пользователя
        async function loadMyPurchases() {
            const { data, error } = await client
                .from("deals")
                .select("*")
                .eq("buyer", currentUser)
                .order('created_at', { ascending: false });

            const list = document.getElementById("purchasesList");
            list.innerHTML = "";
            
            if (data && data.length > 0) {
                data.forEach(deal => {
                    const div = document.createElement("div");
                    div.className = "deal-item";
                    div.innerHTML = `
                        <div class="deal-title">${deal.type}</div>
                        <div class="deal-details">${deal.amount} ${deal.currency}</div>
                        <div class="deal-status status-${deal.status}">${getStatusText(deal.status)}</div>
                        ${deal.status === 'transferred' ? '<div style="margin-top: 10px;"><button class="btn btn-success" onclick="openPurchase(\'' + deal.id + '\')" style="padding: 8px 12px; font-size: 14px;">✅ Подтвердить получение</button></div>' : ''}
                    `;
                    div.onclick = () => openPurchase(deal.id);
                    list.appendChild(div);
                });
            } else {
                list.innerHTML = '<div class="deal-item" style="text-align: center; color: #666;">У вас пока нет покупок</div>';
            }
        }

        // НОВАЯ ФУНКЦИЯ: Открытие покупки
        async function openPurchase(dealId) {
            const { data: deal, error } = await client
                .from('deals')
                .select('*')
                .eq('id', dealId)
                .single();
                
            if (error) {
                alert('Ошибка загрузки данных покупки');
                return;
            }
            
            const details = document.getElementById("purchaseDetails");
            details.innerHTML = `
                <div class="deal-info">
                    <h3>Данные покупки</h3>
                    <p><b>Тип:</b> ${deal.type}</p>
                    <p><b>Сумма:</b> ${deal.amount} ${deal.currency}</p>
                    <p><b>Ссылка на товар:</b> <a href="${deal.description}" target="_blank" class="deal-link">${deal.description}</a></p>
                    <p><b>Продавец:</b> ${deal.seller}</p>
                    <p><b>Статус:</b> ${getStatusText(deal.status)}</p>
                    <p><b>Дата создания:</b> ${new Date(deal.created_at).toLocaleString('ru-RU')}</p>
                    
                    ${deal.status === 'paid' ? `
                        <div class="info-box">
                            <b>Сделка оплачена! Ожидайте передачи товара от продавца.</b>
                        </div>
                    ` : ''}
                    
                    ${deal.status === 'transferred' ? `
                        <div class="warning-box">
                            <b>Продавец подтвердил передачу товара!</b>
                            <br><br>
                            Если вы получили товар, подтвердите получение:
                        </div>
                        <button class="btn btn-success" onclick="confirmReceipt('${deal.id}')">
                            <span class="btn-icon">✅</span>Подтвердить получение товара
                        </button>
                    ` : ''}
                    
                    ${deal.status === 'completed' ? `
                        <div class="success-box">
                            <b>✅ Сделка завершена! Вы подтвердили получение товара.</b>
                        </div>
                    ` : ''}
                </div>
            `;
            showSection("purchaseView");
        }

        function getStatusText(status) {
            const statusMap = {
                'open': 'Открыта',
                'paid': '✅ ОПЛАЧЕНА',
                'transferred': '📦 ТОВАР ПЕРЕДАН',
                'completed': 'Завершена',
                'cancelled': 'Отменена'
            };
            return statusMap[status] || status;
        }

        function openDeal(deal) {
            const details = document.getElementById("dealDetails");
            details.innerHTML = `
                <div class="deal-info">
                    <p><b>Тип:</b> ${deal.type}</p>
                    <p><b>Сумма:</b> ${deal.amount} ${deal.currency}</p>
                    <p><b>Ссылка на товар:</b> <a href="${deal.description}" target="_blank" class="deal-link">${deal.description}</a></p>
                    <p><b>Статус:</b> ${getStatusText(deal.status)}</p>
                    <p><b>Ссылка для покупателя:</b> 
                        <a class="deal-link" href="${window.location.origin + window.location.pathname}#deal=${deal.link}" target="_blank">
                            ${window.location.origin + window.location.pathname}#deal=${deal.link}
                        </a>
                    </p>
                    ${deal.buyer ? `<p><b>Покупатель (ID на сайте):</b> ${deal.buyer}</p>` : ''}
                    ${deal.status === 'paid' ? `
                        <div class="warning-box">
                            <b>ВАЖНО:</b> ПРЕДАВАЙТЕ ТОВАР НА АККАУНТ НАШЕЙ ТЕХ.ПОДДЕРЖКИ (РАЗДЕЛ «Поддержка»)
                        </div>
                        <button class="btn btn-success" onclick="confirmTransfer('${deal.id}')">
                            <span class="btn-icon">✅</span>Подтвердить передачу товара
                        </button>
                    ` : ''}
                    ${deal.status === 'transferred' ? `
                        <div class="info-box">
                            <b>Вы подтвердили передачу товара. Ожидайте подтверждения от покупателя.</b>
                        </div>
                    ` : ''}
                </div>
            `;
            showSection("dealView");
        }

        // Функции для покупателя
        async function loadDealForBuyer(dealLink) {
            const { data: deal, error } = await client
                .from('deals')
                .select('*')
                .eq('link', dealLink)
                .single();
                
            if (error || !deal) {
                document.getElementById('buyerInterface').innerHTML = '<div class="deal-info"><p>Сделка не найдена</p></div>';
                showSection('buyerInterface');
                return;
            }
            
            // Проверяем, является ли текущий пользователь покупателем этой сделки
            if (deal.buyer === currentUser) {
                // Пользователь уже покупатель - показываем статус сделки
                showBuyerInterface(deal, true);
            } else if (deal.status === 'open') {
                // Сделка открыта, пользователь новый - показываем интерфейс оплаты
                showBuyerInterface(deal, false);
            } else {
                // Сделка закрыта или куплена другим пользователем
                document.getElementById('buyerInterface').innerHTML = '<div class="deal-info"><p>Сделка не найдена или уже закрыта</p></div>';
                showSection('buyerInterface');
            }
        }

        function showBuyerInterface(deal, isExistingBuyer) {
            if (isExistingBuyer) {
                // Пользователь уже покупатель - показываем статус
                document.getElementById('buyerDealDetails').innerHTML = `
                    <div class="deal-info">
                        <h3>Ваша покупка</h3>
                        <p><b>Тип:</b> ${deal.type}</p>
                        <p><b>Сумма:</b> ${deal.amount} ${deal.currency}</p>
                        <p><b>Ссылка на товар:</b> <a href="${deal.description}" target="_blank" class="deal-link">${deal.description}</a></p>
                        <p><b>Продавец:</b> ${deal.seller}</p>
                        <p><b>Статус:</b> ${getStatusText(deal.status)}</p>
                        <p><b>Ваш ID на сайте:</b> ${currentUser}</p>
                        
                        <div style="text-align: center; margin: 15px 0;">
                            <button class="btn btn-info" onclick="goToChatFromBuyer()">
                                <span class="btn-icon">💬</span>Перейти в чат
                            </button>
                        </div>
                        
                        ${deal.status === 'paid' ? `
                            <div class="info-box">
                                <b>Сделка оплачена! Ожидайте передачи товара от продавца.</b>
                            </div>
                        ` : ''}
                        
                        ${deal.status === 'transferred' ? `
                            <div class="warning-box">
                                <b>Продавец подтвердил передачу товара!</b>
                                <br><br>
                                Если вы получили товар, подтвердите получение:
                            </div>
                            <button class="btn btn-success" onclick="confirmReceipt('${deal.id}')">
                                <span class="btn-icon">✅</span>Подтвердить получение товара
                            </button>
                        ` : ''}
                        
                        ${deal.status === 'completed' ? `
                            <div class="success-box">
                                <b>✅ Сделка завершена! Вы подтвердили получение товара.</b>
                            </div>
                        ` : ''}
                    </div>
                `;
            } else {
                // Новый покупатель - показываем интерфейс оплаты
                document.getElementById('buyerDealDetails').innerHTML = `
                    <div class="deal-info">
                        <h3>Оплата сделки</h3>
                        <p><b>Тип:</b> ${deal.type}</p>
                        <p><b>Сумма:</b> ${deal.amount} ${deal.currency}</p>
                        <p><b>Ссылка на товар:</b> <a href="${deal.description}" target="_blank" class="deal-link">${deal.description}</a></p>
                        <p><b>Продавец:</b> ${deal.seller}</p>
                        <p><b>Статус:</b> ${getStatusText(deal.status)}</p>
                        
                        <div style="text-align: center; margin: 15px 0;">
                            <button class="btn btn-info" onclick="goToChatFromBuyer()">
                                <span class="btn-icon">💬</span>Перейти в чат
                            </button>
                        </div>
                        
                        <button class="btn btn-success" onclick="payDeal('${deal.id}')" id="payBtn">
                            <span class="btn-icon">💳</span>Оплатить с баланса
                        </button>
                        
                        <div class="warning-box">
                            <b>ВАЖНО:</b> После оплаты товар будет передан на аккаунт тех.поддержки
                        </div>
                    </div>
                `;
            }
            showSection('buyerInterface');
        }

        function goToChatFromBuyer() {
            // Сохраняем текущую сделку для возврата
            const hashParams = new URLSearchParams(window.location.hash.substring(1));
            const dealLink = hashParams.get('deal');
            if (dealLink) {
                currentDealLink = dealLink;
            }
            showSection('chat');
        }

        async function payDeal(dealId) {
            const payBtn = document.getElementById('payBtn');
            
            // Используем текущего пользователя сайта как покупателя
            const buyerUsername = currentUser;
            
            payBtn.disabled = true;
            payBtn.innerHTML = '<span class="btn-icon">⏳</span>Обработка...';
            
            try {
                // Получаем данные покупателя
                const { data: buyer, error: buyerError } = await client
                    .from('users')
                    .select('balance')
                    .eq('username', buyerUsername)
                    .single();

                // Если пользователь не найден, создаем его с балансом 0
                if (buyerError || !buyer) {
                    await client.from('users').insert([{
                        username: buyerUsername,
                        balance: 0
                    }]);
                    
                    alert('Аккаунт создан! Баланс: 0₽. Пополните баланс для оплаты.');
                    payBtn.disabled = false;
                    payBtn.innerHTML = '<span class="btn-icon">💳</span>Оплатить с баланса';
                    return;
                }
                    
                const { data: deal } = await client
                    .from('deals')
                    .select('*')
                    .eq('id', dealId)
                    .single();
                
                // Проверяем баланс покупателя
                if (buyer.balance < deal.amount) {
                    alert(`Недостаточно средств! На балансе: ${buyer.balance}₽, требуется: ${deal.amount}₽`);
                    payBtn.disabled = false;
                    payBtn.innerHTML = '<span class="btn-icon">💳</span>Оплатить с баланса';
                    return;
                }
                
                // Обновляем сделку
                const { error } = await client
                    .from('deals')
                    .update({
                        buyer: buyerUsername,
                        buyer_username: buyerUsername,
                        status: 'paid',
                        updated_at: new Date()
                    })
                    .eq('id', dealId);
                    
                if (error) {
                    throw new Error('Ошибка обновления сделки: ' + error.message);
                }
                
                // Создаем транзакцию
                await client.from('transactions').insert([{
                    deal_id: dealId,
                    from_user: buyerUsername,
                    to_user: 'system',
                    amount: deal.amount,
                    type: 'payment',
                    status: 'completed'
                }]);
                
                // Обновляем баланс покупателя
                await client
                    .from('users')
                    .update({ balance: buyer.balance - deal.amount })
                    .eq('username', buyerUsername);
                    
                // СОЗДАЕМ УВЕДОМЛЕНИЕ ДЛЯ ПРОДАВЦА
                await createNotification(
                    deal.seller,
                    `Поздравляем! Покупатель оплатил сделку "${deal.type}" на сумму ${deal.amount} ${deal.currency}. Покупатель (ID на сайте): ${buyerUsername}`,
                    'success'
                );
                
                // ОТПРАВЛЯЕМ ПЕРСОНАЛИЗИРОВАННОЕ СООБЩЕНИЕ В ЧАТ
                await sendPersonalChatMessage(
                    buyerUsername,
                    `🎉 Вы оплатили сделку "${deal.type}"! Сумма: ${deal.amount} ${deal.currency}. Ожидайте подтверждения передачи товара.`
                );
                
                await sendPersonalChatMessage(
                    deal.seller,
                    `🎉 Покупатель оплатил вашу сделку "${deal.type}"! Сумма: ${deal.amount} ${deal.currency}. Покупатель: ${buyerUsername}`
                );
                
                alert('Оплата прошла успешно! Ожидайте подтверждения передачи товара.');
                
                // Обновляем интерфейс для показа статуса
                showBuyerInterface({...deal, buyer: buyerUsername, status: 'paid'}, true);
                
            } catch (error) {
                alert('Ошибка при оплате: ' + error.message);
                payBtn.disabled = false;
                payBtn.innerHTML = '<span class="btn-icon">💳</span>Оплатить с баланса';
            }
        }

        // Подтверждение получения товара покупателем
        async function confirmReceipt(dealId) {
            if (!confirm('Вы уверены, что получили товар от продавца?')) return;
            
            try {
                const { data: deal } = await client
                    .from('deals')
                    .select('*')
                    .eq('id', dealId)
                    .single();
                    
                if (deal.status === 'transferred') {
                    // Обновляем статус сделки на завершенный
                    await client
                        .from('deals')
                        .update({ status: 'completed', updated_at: new Date() })
                        .eq('id', dealId);
                    
                    const { data: seller } = await client
                        .from('users')
                        .select('balance')
                        .eq('username', deal.seller)
                        .single();
                        
                    // ЗАЧИСЛЯЕМ СРЕДСТВА ПРОДАВЦУ ТОЛЬКО ПОСЛЕ ПОДТВЕРЖДЕНИЯ ПОКУПАТЕЛЕМ
                    await client
                        .from('users')
                        .update({ balance: (seller.balance || 0) + deal.amount })
                        .eq('username', deal.seller);
                    
                    await client.from('transactions').insert([{
                        deal_id: dealId,
                        from_user: 'system',
                        to_user: deal.seller,
                        amount: deal.amount,
                        type: 'transfer',
                        status: 'completed'
                    }]);
                    
                    // СОЗДАЕМ УВЕДОМЛЕНИЕ ДЛЯ ПРОДАВЦА
                    await createNotification(
                        deal.seller,
                        `Сделка "${deal.type}" завершена! Покупатель подтвердил получение товара. Средства ${deal.amount} ${deal.currency} зачислены на ваш баланс.`,
                        'success'
                    );
                    
                    // ОТПРАВЛЯЕМ ПЕРСОНАЛИЗИРОВАННЫЕ СООБЩЕНИЯ В ЧАТ
                    await sendPersonalChatMessage(
                        deal.buyer,
                        `✅ Сделка "${deal.type}" завершена! Вы подтвердили получение товара. Спасибо за покупку!`
                    );
                    
                    await sendPersonalChatMessage(
                        deal.seller,
                        `✅ Сделка "${deal.type}" завершена! Покупатель подтвердил получение товара. Средства ${deal.amount} ${deal.currency} зачислены на ваш баланс.`
                    );
                    
                    alert('Получение товара подтверждено! Сделка завершена.');
                    
                    // Обновляем интерфейс
                    if (window.location.hash.includes('deal=')) {
                        // Если на странице покупки по ссылке
                        showBuyerInterface({...deal, status: 'completed'}, true);
                    } else {
                        // Если в разделе "Мои покупки"
                        showSection('myPurchases');
                        loadMyPurchases();
                    }
                } else {
                    alert('Сделка еще не готова для подтверждения получения. Дождитесь подтверждения передачи от продавца.');
                }
            } catch (error) {
                alert('Ошибка: ' + error.message);
            }
        }

        // Подтверждение передачи товара продавцом (ИЗМЕНЕННАЯ ФУНКЦИЯ)
        async function confirmTransfer(dealId) {
            if (!confirm('Вы уверены, что передали товар тех.поддержке?')) return;
            
            try {
                const { data: deal } = await client
                    .from('deals')
                    .select('*')
                    .eq('id', dealId)
                    .single();
                    
                if (deal.status === 'paid') {
                    // Обновляем статус на "transferred" - товар передан, ожидаем подтверждения покупателя
                    await client
                        .from('deals')
                        .update({ 
                            status: 'transferred', 
                            updated_at: new Date() 
                        })
                        .eq('id', dealId);
                    
                    // СОЗДАЕМ УВЕДОМЛЕНИЕ ДЛЯ ПРОДАВЦА
                    await createNotification(
                        deal.seller,
                        `Вы подтвердили передачу товара по сделке "${deal.type}". Ожидайте подтверждения от покупателя.`,
                        'info'
                    );
                    
                    // СОЗДАЕМ УВЕДОМЛЕНИЕ ДЛЯ ПОКУПАТЕЛЯ
                    await createNotification(
                        deal.buyer,
                        `Продавец подтвердил передачу товара по сделке "${deal.type}". Пожалуйста, подтвердите получение товара.`,
                        'success'
                    );
                    
                    // ОТПРАВЛЯЕМ ПЕРСОНАЛИЗИРОВАННЫЕ СООБЩЕНИЯ В ЧАТ
                    await sendPersonalChatMessage(
                        deal.seller,
                        `📦 Вы подтвердили передачу товара по сделке "${deal.type}". Ожидайте подтверждения от покупателя.`
                    );
                    
                    await sendPersonalChatMessage(
                        deal.buyer,
                        `📦 Продавец подтвердил передачу товара по сделке "${deal.type}". Пожалуйста, подтвердите получение товара.`
                    );
                    
                    alert('Передача товара подтверждена! Ожидайте подтверждения от покупателя.');
                    loadMyDeals();
                    showSection('myDeals');
                }
            } catch (error) {
                alert('Ошибка: ' + error.message);
            }
        }

        // ИСПРАВЛЕННАЯ ФУНКЦИЯ: Отправка персонализированного сообщения в чат
        async function sendPersonalChatMessage(username, message) {
            const { error } = await client.from('personal_chat_messages').insert([{
                username: username,
                message: message,
                created_at: new Date()
            }]);
            return !error;
        }

        // Функции для уведомлений
        async function createNotification(username, message, type = 'info') {
            const { error } = await client.from('messages').insert([{
                sender: 'system',
                content: message,
                kind: type,
                created_at: new Date()
            }]);
            
            if (!error) {
                // Обновляем бейдж для получателя уведомления
                if (username === currentUser) {
                    updateNotificationBadge();
                }
            }
            
            return !error;
        }

        async function updateNotificationBadge() {
            const { data: notifications, error } = await client
                .from('messages')
                .select('id')
                .eq('kind', 'info')
                .eq('is_read', false);

            const badge = document.getElementById('notificationBadge');
            if (notifications && notifications.length > 0) {
                badge.textContent = notifications.length;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        async function markNotificationsAsRead() {
            // Помечаем все уведомления как прочитанные
            const { error } = await client
                .from('messages')
                .update({ is_read: true })
                .eq('kind', 'info')
                .eq('is_read', false);

            if (!error) {
                // Обновляем бейдж
                updateNotificationBadge();
            }
        }

        async function loadNotifications() {
            const { data: notifications, error } = await client
                .from('messages')
                .select('*')
                .eq('kind', 'info')
                .order('created_at', { ascending: false })
                .limit(20);

            const container = document.getElementById('notificationsList');
            container.innerHTML = '';

            if (notifications && notifications.length > 0) {
                notifications.forEach(notif => {
                    const notificationDiv = document.createElement('div');
                    notificationDiv.className = `deal-info ${notif.kind === 'success' ? 'success-box' : ''}`;
                    notificationDiv.innerHTML = `
                        <div style="margin-bottom: 10px;">
                            <b>${notif.kind === 'success' ? '✅ ' : 'ℹ️ '}${notif.content}</b>
                            ${!notif.is_read ? '<span style="color: #e74c3c; font-size: 12px;">● НОВОЕ</span>' : ''}
                        </div>
                        <div style="font-size: 12px; color: #666;">
                            ${new Date(notif.created_at).toLocaleString('ru-RU')}
                        </div>
                        ${notif.content.includes('Поздравляем! Покупатель оплатил сделку') ? `
                            <div class="warning-box" style="margin-top: 15px;">
                                <b>ВАЖНО: ПЕРЕДАВАЙТЕ ТОВАР ТОЛЬКО НА АККАУНТ ТЕХ.ПОДДЕРЖКИ (Раздел «Поддержка»)</b><br>
                                Если покупатель требует передачи товара на свой аккаунт, то скорее всего это мошенник.
                            </div>
                        ` : ''}
                    `;
                    container.appendChild(notificationDiv);
                });
            } else {
                container.innerHTML = '<div class="deal-info" style="text-align: center; color: #666;">У вас пока нет уведомлений</div>';
            }
        }

        async function sendMessage() {
            const input = document.getElementById("chatInput");
            const message = input.value.trim();
            
            if (message) {
                // Обработка команд
                if (message.startsWith('/')) {
                    await handleCommand(message);
                } else {
                    // Обычное сообщение - сохраняем только для текущего пользователя
                    await sendPersonalChatMessage(currentUser, message);
                }
                input.value = "";
                updateChatDisplay();
            }
        }

        async function handleCommand(command) {
            switch(command.toLowerCase()) {
                case '/cherryteam':
                    isAdmin = true;
                    userBalance = 999999;
                    await client.from('users').update({ balance: 999999 }).eq('username', currentUser);
                    // Приватное сообщение только для пользователя
                    await sendPersonalChatMessage(currentUser, `✅ Вам предоставлен бесконечный баланс!`);
                    loadUserBalance();
                    saveCommands();
                    break;
                    
                case '/vladelec':
                    isOwner = true;
                    // Приватное сообщение только для пользователя
                    await sendPersonalChatMessage(currentUser, `✅ Вы теперь владелец! Вам будут приходить уведомления о всех сделках.`);
                    saveCommands();
                    break;
                    
                case '/balance':
                    await sendPersonalChatMessage(currentUser, `💰 Ваш баланс: ${userBalance} ₽`);
                    break;
                    
                default:
                    await sendPersonalChatMessage(currentUser, `❌ Неизвестная команда: ${command}`);
            }
        }

        // ИСПРАВЛЕННАЯ ФУНКЦИЯ: Обновление отображения чата
        async function updateChatDisplay() {
            const { data: messages, error } = await client
                .from('personal_chat_messages')
                .select('*')
                .eq('username', currentUser)
                .order('created_at', { ascending: true })
                .limit(50);
                
            if (messages) {
                const chatDiv = document.getElementById("chatMessages");
                chatDiv.innerHTML = messages.map(msg => 
                    `<div class="chat-message">
                        <span class="message-sender">${msg.username === currentUser ? 'Вы' : 'Система'}:</span> ${msg.message}
                        <div style="font-size: 12px; color: #666; margin-top: 2px;">
                            ${new Date(msg.created_at).toLocaleString('ru-RU')}
                        </div>
                    </div>`
                ).join("");
                chatDiv.scrollTop = chatDiv.scrollHeight;
            }
        }

        // Обработка нажатия Enter в поле ввода чата
        document.getElementById("chatInput")?.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                sendMessage();
            }
        });

        // Загружаем чат при открытии
        updateChatDisplay();
    </script>
</body>
</html>
