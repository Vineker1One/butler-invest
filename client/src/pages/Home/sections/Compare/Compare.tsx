import "./Compare.css";

export const Compare = () => {
    return (
        <section className="compare">
            <div className="compare__container">
                <div className="compare__header">
                    <p>Почему клиенты выбирают инвестировать с</p>
                    <h2>ДВОРЕЦКИЙ?</h2>
                </div>

                <div className="compare__grid">
                    {/* 1 */}
                    <div className="compare-card">
                        <div className="compare-card__header">
                        <h3>
                            Инвестиция в недвижимость с сервисом{" "}
                            <span>Дворецкий:</span>
                        </h3>
                        </div>

                        <ul>
                            <li className="plus">
                                Ваш Дворецкий гарантирует доходность от{" "}
                                <b>40% годовых</b>
                            </li>
                            <li className="plus">
                                Недвижимость повышается в цене от{" "}
                                <b>25% в год</b>
                            </li>
                            <li className="plus">
                                <b>Удобное распоряжение</b> активами
                            </li>
                            <li className="plus">
                                Возможность <b>продажи</b> и{" "}
                                <b>реинвестирования</b> в любой момент
                            </li>
                            <li className="plus">
                                <b>Пассивный доход</b> от сдачи в аренду
                            </li>
                            <li className="plus">
                                <b>Полное сопровождение</b> в менеджменте
                                активов от персонального Дворецкого
                            </li>
                        </ul>
                    </div>

                    {/* 2 */}
                    <div className="compare-card">
                        <div className="compare-card__header">
                            <h3>Классический вклад:</h3>
                        </div>
                        <ul>
                            <li className="plus">
                                Оставляя деньги в банке вы получаете 18% годовых
                            </li>
                            <li className="minus">
                                Удорожание актива не происходит
                            </li>
                            <li className="minus">
                                Имеет ограниченный срок вклада
                            </li>
                            <li className="minus">
                                Ограничения по управлению средствами
                            </li>
                            <li className="minus">
                                Полная потеря процентов при досрочном
                                расторжении
                            </li>
                            <li className="minus">
                                Заморозка денег и потеря ликвидности
                            </li>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div className="compare-card">
                        <div className="compare-card__header">
                        <h3>Биржа, ценные бумаги, биткоины:</h3>
                        </div>
                        <ul>
                            <li className="plus">
                                Доходность зависит от опыта управления активами
                            </li>
                            <li className="plus">
                                Доход от дивидендов акций компаний
                            </li>
                            <li className="minus">
                                Непредсказуемая стоимость продажи активов
                            </li>
                            <li className="minus">
                                Неуправляемое изменение стоимости активов
                            </li>
                            <li className="minus">Низкая безопасность</li>
                        </ul>
                    </div>

                    {/* 4 */}
                    <div className="compare-card">
                        <div className="compare-card__header">
                        <h3>Валюта, золото, драгоценные металлы:</h3>
                        </div>
                        <ul>
                            <li className="plus">
                                Низкий порог входа и доступность
                            </li>
                            <li className="plus">
                                Диверсификация геополитических рисков
                            </li>
                            <li className="minus">
                                Валютный контроль и ограничения
                            </li>
                            <li className="minus">
                                Отсутствие пассивного дохода
                            </li>
                            <li className="minus">
                                Разрыв между покупкой и продажей
                            </li>
                            <li className="minus">
                                Риски физической сохраности
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
