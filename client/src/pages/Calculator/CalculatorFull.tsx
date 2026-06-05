import "./CalculatorFull.css";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export const useCountUp = (end: number, duration = 800) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const startTime = performance.now();

        const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const current = start + (end - start) * progress;
            setValue(Math.floor(current));

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [end]);

    return value;
};

// 🔹 Типы результатов
type FlatResult = {
    total: number;
    profit: number;
};

type ParkingResult = {
    total: number;
    profit: number;
    rentIncome: number;
    salePrice: number;
    saleIncome: number;
    payback: number;
};

export const CalculatorFull = () => {
    const [mode, setMode] = useState<"flat" | "parking">("flat");
    const getYearsLabel = (n: number) => {
        if (n === 1) return "год";
        if (n >= 2 && n <= 4) return "года";
        return "лет";
    };
    // 🏠 Общие
    const [investment, setInvestment] = useState<number | undefined>(4500000);
    const [years, setYears] = useState<number | undefined>(3);

    // 🏠 квартира
    const [rate, setRate] = useState<number | undefined>(32);

    // 🚗 паркинг
    const [rent, setRent] = useState<number | undefined>(7000);
    const [growth, setGrowth] = useState<number | undefined>(40);

    const calculateFlat = () => {
        const P = investment ?? 0;
        const r = (rate ?? 0) / 100;
        const n = years ?? 0;

        const total = P * Math.pow(1 + r, n);

        return {
            total: Math.round(total),
            profit: Math.round(total - P),
        };
    };

    const calculateParking = () => {
        const P = investment ?? 0;
        const n = years ?? 0;
        const rentIncome = (rent ?? 0) * 12 * n;
        const salePrice = P * (1 + (growth ?? 0) / 100); // 980 000 ₽
        const saleIncome = salePrice - P; // 280 000 ₽ (прибыль)

        const totalProfit = rentIncome + saleIncome;

        return {
            total: Math.round(P + totalProfit),
            profit: Math.round(totalProfit),
            rentIncome: Math.round(rentIncome),
            salePrice: Math.round(salePrice),
            saleIncome: Math.round(saleIncome),
            payback: Math.round(P / ((rent ?? 1) * 12)),
        };
    };

    // 🔹 Внутри компонента
    const result = mode === "flat" ? calculateFlat() : calculateParking();

    // 🔹 Type guard для безопасного доступа
    const isParkingResult = (
        res: FlatResult | ParkingResult,
    ): res is ParkingResult => {
        return "rentIncome" in res;
    };
    const animatedTotal = useCountUp(result.total);
    const animatedProfit = useCountUp(result.profit);

    const animatedRentIncome = useCountUp(
        mode === "parking" && isParkingResult(result) ? result.rentIncome : 0,
    );
    const animatedSaleIncome = useCountUp(
        mode === "parking" && isParkingResult(result) ? result.saleIncome : 0,
    );
    const animatedPayback = useCountUp(
        mode === "parking" && isParkingResult(result) ? result.payback : 0,
    );

    const format = (num: number) => num.toLocaleString("ru-RU");

    return (
        <section className="calculatorFull">
            <div className="calculatorFull__card">
                <h2>Калькулятор доходности</h2>

                {/* 🔘 Переключатель */}
                <div className="calculator__switch">
                    <button
                        className={mode === "flat" ? "active" : ""}
                        onClick={() => setMode("flat")}
                    >
                        Квартира
                    </button>
                    <button
                        className={mode === "parking" ? "active" : ""}
                        onClick={() => setMode("parking")}
                    >
                        Паркинг
                    </button>
                </div>

                {/* 💰 Вложение */}
                <div className="calculatorFull__field">
                    <label>Вложение</label>
                    <NumericFormat
                        value={investment}
                        onValueChange={(v) => setInvestment(v.floatValue)}
                        thousandSeparator=" "
                        allowNegative={false}
                        className="calculatorFull__input"
                    />
                </div>

                {/* ⏱ Срок */}
                <div className="calculator__field">
                    <label>Срок (лет)</label>
                    <NumericFormat
                        value={years}
                        onValueChange={(v) => setYears(v.floatValue)}
                        decimalScale={0}
                        allowNegative={false}
                        className="calculatorFull__input"
                    />
                </div>

                {/* 🏠 КВАРТИРА */}
                {mode === "flat" && (
                    <div className="calculatorFull__field">
                        <label>Доходность (% годовых)</label>
                        <NumericFormat
                            value={rate}
                            onValueChange={(v) => setRate(v.floatValue)}
                            suffix="%"
                            decimalScale={0}
                            allowNegative={false}
                            className="calculatorFull__input"
                        />
                    </div>
                )}

                {/* 🚗 ПАРКИНГ */}
                {mode === "parking" && (
                    <>
                        <div className="calculatorFull__field">
                            <label>Аренда в месяц</label>
                            <NumericFormat
                                value={rent}
                                onValueChange={(v) => setRent(v.floatValue)}
                                thousandSeparator=" "
                                allowNegative={false}
                                className="calculator__input"
                            />
                        </div>

                        <div className="calculatorFull__field">
                            <label>Рост при продаже (%)</label>
                            <NumericFormat
                                value={growth}
                                onValueChange={(v) => setGrowth(v.floatValue)}
                                suffix="%"
                                decimalScale={0}
                                allowNegative={false}
                                className="calculatorFull__input"
                            />
                        </div>
                    </>
                )}

                {/* 📊 Результат */}
                <div className="calculatorFull__result">
                    {/* Главное — общий доход */}
                    <p>
                        Общий доход за {years} {getYearsLabel(years ?? 0)}:
                    </p>
                    <b className="calculatorFull__total">
                        {format(animatedProfit)} ₽
                    </b>

                    {/* 🔥 Детали для паркинга */}
                    {mode === "parking" && isParkingResult(result) && (
                        <div className="calculatorFull__details">
                            <div className="calculatorFull__detail-row">
                                <span>
                                    Аренда за {years}{" "}
                                    {getYearsLabel(years ?? 0)}:
                                </span>
                                <b>{format(animatedRentIncome)} ₽</b>
                            </div>

                            <div className="calculatorFull__detail-row">
                                <span>Продажа (+{growth}%):</span>
                                <b>{format(animatedSaleIncome)} ₽</b>
                            </div>

                            <div className="calculatorFull__detail-row highlight">
                                <span>Окупаемость:</span>
                                <b>{animatedPayback} лет</b>
                            </div>
                        </div>
                    )}

                    {mode === "flat" && (
                        <>
                            <p>Итоговая сумма:</p>
                            <b>{format(animatedTotal)} ₽</b>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};
